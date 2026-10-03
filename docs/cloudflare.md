# Configuración de Cloudflare

GitHub Pages no permite configurar cabeceras ni TLS, así que esa parte vive en el panel de Cloudflare del dominio `carlosalbertoxw.com`. Este documento es su respaldo: sirve para restaurarla si se pierde, para revisarla y para migrarla a otro proveedor.

Los valores exactos de las cabeceras están en [check-headers.sh](../.github/scripts/check-headers.sh), que es la fuente de verdad. El workflow [produccion.yml](../.github/workflows/produccion.yml) lo ejecuta cada lunes contra el sitio publicado y abre un issue con la etiqueta `cabeceras` si algo no coincide. Si cambias un valor a propósito, actualiza el script en el mismo momento.

## Qué está configurado y dónde

| Ajuste | Valor | Dónde se cambia |
|---|---|---|
| Proxy | Registros DNS del dominio con el proxy activo (nube naranja), apuntando a GitHub Pages | DNS › Records |
| HTTPS forzado | *Always Use HTTPS* activo: HTTP responde `301` hacia HTTPS | SSL/TLS › Edge Certificates |
| TLS mínimo | 1.2; las versiones 1.0 y 1.1 se rechazan | SSL/TLS › Edge Certificates › Minimum TLS Version |
| Modo de cifrado | *Full*: Cloudflare se conecta a GitHub Pages por HTTPS, sin validar el certificado. No usar *Full (strict)*: ver la explicación más abajo | SSL/TLS › Overview |
| Cabeceras de seguridad | Las seis de `check-headers.sh`: HSTS, CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` | Rules › Transform Rules › Modify Response Header |
| Analítica | Cloudflare Web Analytics, inyectado automáticamente por el proxy (sin cookies) | Analytics & Logs › Web Analytics |

> Las cabeceras, la redirección, el TLS mínimo y el modo de cifrado se verificaron el 2026-10-03. La ubicación de cada menú se anotó según la versión habitual del panel: si difiere, corrige esta tabla.

## Por qué el modo de cifrado es *Full* y no *Full (strict)*

Con el proxy de Cloudflare delante, GitHub Pages no puede emitir un certificado propio para `carlosalbertoxw.com`. Para ese nombre presenta su certificado genérico `*.github.io` (la API de Pages devuelve `https_certificate: null`). *Full (strict)* exige un certificado válido para el dominio, así que lo rechazaría y el sitio respondería con un error 526.

Con *Full*, el tramo entre el visitante y Cloudflare queda cifrado y autenticado con el certificado de Cloudflare para el dominio, que es el tramo expuesto a internet. El tramo entre Cloudflare y GitHub va cifrado pero sin verificar al servidor. Se acepta porque el sitio es estático, no tiene datos de usuarios, y ese tramo viaja entre las redes de los dos proveedores.

Para comprobar qué certificado presenta GitHub Pages sin pasar por Cloudflare:

```bash
echo | openssl s_client -connect 185.199.108.153:443 -servername carlosalbertoxw.com 2>/dev/null | openssl x509 -noout -subject
```

Si algún día muestra `CN=carlosalbertoxw.com`, ya se puede pasar a *Full (strict)*.

## Por qué cada cabecera tiene ese valor

- **`Content-Security-Policy`**: solo permite recursos del propio sitio, más el script y el endpoint de Cloudflare Web Analytics. `script-src` incluye `'unsafe-inline'` porque el export estático de Next.js inyecta scripts inline para hidratar la página, y en un sitio estático no se puede generar un nonce por petición. Los scripts propios llevan además SRI (`experimental.sri` en `next.config.ts`). `frame-ancestors 'none'` impide incrustar el sitio en un iframe.
- **`X-Frame-Options: SAMEORIGIN`**: es la versión antigua de `frame-ancestors` para navegadores que no entienden CSP. Es más permisiva que la CSP (`'none'`), pero se deja así a propósito: los navegadores actuales aplican `frame-ancestors` e ignoran esta cabecera cuando hay CSP, y en los antiguos `SAMEORIGIN` sigue impidiendo que otro sitio incruste este (clickjacking). Es el valor que recomienda Cloudflare, y cambiarlo no aporta protección real.
- **`Strict-Transport-Security`**: un año, con subdominios y `preload`. Antes de quitar `preload` o `includeSubDomains`, ten en cuenta que los navegadores lo recuerdan durante todo el `max-age`.
- **`Referrer-Policy`** y **`Permissions-Policy`**: no envían la ruta completa a otros sitios y desactivan cámara, micrófono, geolocalización y pagos, que el sitio no usa.

## Restaurar desde cero

1. Agrega el dominio a Cloudflare y activa el proxy en sus registros DNS hacia GitHub Pages.
2. Ajusta SSL/TLS como indica la tabla.
3. Crea una Transform Rule de tipo *Modify Response Header* para todas las peticiones del dominio y agrega cada cabecera de `check-headers.sh` con la operación *Set*.
4. Activa Web Analytics para el dominio.
5. Ejecuta `bash .github/scripts/check-headers.sh` (o lanza a mano el workflow *Revisar el sitio publicado*) hasta que todo salga en verde.
