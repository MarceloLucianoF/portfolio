import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/103156755?v=4';

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <img
            src={AVATAR_URL}
            alt="Marcelo"
            style={{ width: '180px', height: '180px', borderRadius: '50%', border: '6px solid #38bdf8' }}
          />
        </div>
        
        <h1 style={{ fontSize: '72px', fontWeight: '900', margin: '0 0 20px 0', color: '#ffffff' }}>
          Marcelo Luciano <span style={{ color: '#38bdf8' }}>Filho</span>
        </h1>
        
        <p style={{ fontSize: '32px', fontWeight: '500', color: '#94a3b8', margin: '0' }}>
          Engenheiro de Soluções | Infraestrutura, Automação & IA
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}