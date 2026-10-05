# Seguridad

## Reportar una vulnerabilidad

Si encuentras un problema de seguridad en este sitio o en este repositorio, repórtalo de forma privada desde la pestaña **Security › Report a vulnerability** del repositorio en GitHub. Por favor no abras un issue público.

Incluye qué encontraste, cómo reproducirlo y qué impacto crees que tiene. Respondo en cuanto pueda; al tratarse de un proyecto personal, no hay un plazo garantizado.

## Alcance

El sitio es estático: no tiene backend, cuentas, formularios ni base de datos. Los reportes más útiles son los que afectan a lo que sí existe:

- el código y los workflows de este repositorio, incluida la cadena de dependencias;
- las cabeceras de seguridad y la configuración TLS del dominio (ver [docs/cloudflare.md](docs/cloudflare.md));
- cualquier forma de alterar el contenido publicado.

Los sitios enlazados (blog, redes sociales, proyectos) están fuera de este alcance.

## Modelo de amenazas

- **Qué se protege:** que lo publicado en `carlosalbertoxw.com` sea lo que está en `main`, y el control del dominio. No hay datos de visitantes que proteger: el sitio no los recoge (ver el aviso de privacidad).
- **Quién podría atacarlo:** ataques oportunistas y automatizados, sin un interés particular en el sitio, que buscan publicar contenido malicioso, desviar el dominio o aprovechar su reputación.
- **Por dónde entraría y qué lo frena:**
  - *Cuentas de GitHub, Cloudflare o el registrador del dominio:* MFA, que debe estar activo en las tres, y los pasos ante una cuenta comprometida del [README](README.md#operación).
  - *Dependencias del build:* lockfile congelado, `pnpm audit` en CI, Dependabot con 7 días de espera para versiones nuevas y overrides documentados.
  - *Workflows:* Actions fijadas por SHA, permisos mínimos por job, token sin persistir y zizmor en cada PR.
  - *Cambios en `main`:* PR obligatorio con el check `build` en verde.
  - *Configuración de Cloudflare* (cabeceras, TLS): revisión semanal con [check-headers.sh](.github/scripts/check-headers.sh).
  - *Tramo de Cloudflare a GitHub Pages:* cifrado sin validar el certificado, como riesgo aceptado (ver [docs/cloudflare.md](docs/cloudflare.md)).

Este modelo se revisa cuando el sitio gana una pieza nueva: un formulario, un servicio de terceros o un proveedor de hosting distinto.
