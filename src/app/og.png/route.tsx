import { ImageResponse } from "next/og";
import { ogImage, tagline } from "@/site";

// Imagen Open Graph generada en el build (out/og.png), con el mismo lenguaje visual
// del hero de la portada. Es un route handler y no un opengraph-image.tsx porque esa
// convención exporta el archivo sin extensión, y GitHub Pages lo serviría como
// application/octet-stream en lugar de image/png. La metadata la declara layout.tsx.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
      }}
    >
      <div
        style={{
          fontSize: 96,
          fontWeight: 800,
          backgroundImage: "linear-gradient(to right, #60a5fa, #34d399)",
          backgroundClip: "text",
          color: "transparent",
          marginBottom: 32,
        }}
      >
        Carlos Alberto
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#94a3b8",
          textAlign: "center",
          maxWidth: 900,
        }}
      >
        {tagline}
      </div>
    </div>,
    {
      width: ogImage.width,
      height: ogImage.height,
    },
  );
}
