import { Metadata } from "next";
import RandomString from "./RandomString";

export const metadata: Metadata = {
  title: "Generador de Texto Aleatorio",
  description: "Crea cadenas de texto, contraseñas seguras y secuencias de caracteres aleatorias al instante. Personaliza longitud, símbolos y números.",
};

export default function Page() {
  return <RandomString />;
}