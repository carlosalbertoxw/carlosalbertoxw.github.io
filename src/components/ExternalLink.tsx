import Link from "next/link";
import type { ComponentProps } from "react";

// Enlace que abre en una pestaña nueva. El aviso solo lo oye el lector de pantalla:
// a la vista, el ícono de enlace externo (donde lo hay) ya lo indica.
export default function ExternalLink({ children, ...props }: Omit<ComponentProps<typeof Link>, "target">) {
  return (
    <Link {...props} target="_blank">
      {children}
      <span className="sr-only"> (abre en una pestaña nueva)</span>
    </Link>
  );
}
