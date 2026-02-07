import { Metadata } from "next";
import RandomNumbers from "./RandomNumbers";

export const metadata: Metadata = {
  title: "Generador de Números Aleatorios",
  description: "Genera números al azar de forma gratuita. Configura rangos personalizados, cantidad de números y evita repeticiones.",
};

export default function Page() {
  return <RandomNumbers />;
}