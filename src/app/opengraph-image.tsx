import { ImageResponse } from 'next/og';

// Imagen Open Graph generada en el build (out/opengraph-image.png),
// con el mismo lenguaje visual del hero de la portada
export const dynamic = 'force-static';

export const alt = 'Carlos Alberto';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            backgroundImage: 'linear-gradient(to right, #60a5fa, #34d399)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 32,
          }}
        >
          Carlos Alberto
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Conjunto de recursos digitales para exponer y recordar lo que he aprendido.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
