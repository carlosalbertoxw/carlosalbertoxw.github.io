#!/usr/bin/env bash
# Comprueba que el sitio publicado responda con las cabeceras de seguridad que se
# configuran en Cloudflare. Este archivo es la referencia de sus valores exactos:
# si se cambian a propósito en Cloudflare, se cambian aquí en el mismo momento
# (ver docs/cloudflare.md). Escribe un reporte en Markdown en la salida estándar y
# termina con error si algo no coincide.
# Uso: bash .github/scripts/check-headers.sh [url]

set -u
URL="${1:-https://carlosalbertoxw.com/}"
HOST=$(echo "$URL" | sed -E 's#^https?://([^/]+).*#\1#')

# Cabecera y valor esperado, separados por el primer "|"
EXPECTED=$(cat <<'EOF'
strict-transport-security|max-age=31536000; includeSubDomains; preload
content-security-policy|default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-ancestors 'none'; connect-src 'self' https://cloudflareinsights.com;
x-content-type-options|nosniff
x-frame-options|SAMEORIGIN
referrer-policy|strict-origin-when-cross-origin
permissions-policy|camera=(), microphone=(), geolocation=(), payment=()
EOF
)

failures=0
echo "Revisión de cabeceras de \`$URL\`"
echo
echo "| Cabecera | Esperado | Recibido | |"
echo "|---|---|---|---|"

if ! response=$(curl -sSI --max-time 30 "$URL" 2>&1); then
  echo
  echo "No se pudo consultar el sitio: \`$response\`"
  exit 1
fi
response=$(printf '%s' "$response" | tr -d '\r')

while IFS='|' read -r name value; do
  actual=$(printf '%s\n' "$response" | grep -i "^$name:" | head -1 | cut -d: -f2- | sed 's/^ *//')
  if [ "$actual" = "$value" ]; then
    mark="✅"
  else
    mark="❌"
    failures=$((failures + 1))
  fi
  echo "| \`$name\` | \`$value\` | \`${actual:-(ausente)}\` | $mark |"
done <<< "$EXPECTED"

# HTTP debe redirigir a HTTPS de forma permanente
redirect=$(curl -sSI --max-time 30 "http://$HOST/" 2>/dev/null | tr -d '\r')
status=$(printf '%s\n' "$redirect" | head -1 | awk '{print $2}')
location=$(printf '%s\n' "$redirect" | grep -i '^location:' | head -1 | cut -d' ' -f2-)
if [ "$status" = "301" ] && [ "$location" = "https://$HOST/" ]; then
  mark="✅"
else
  mark="❌"
  failures=$((failures + 1))
fi
echo "| Redirección HTTP | \`301 → https://$HOST/\` | \`${status:-?} → ${location:-?}\` | $mark |"

echo
if [ "$failures" -gt 0 ]; then
  echo "$failures diferencia(s). Si el cambio fue intencional, actualiza este script y docs/cloudflare.md; si no, restaura el valor en Cloudflare."
  exit 1
fi
echo "Todo coincide."
