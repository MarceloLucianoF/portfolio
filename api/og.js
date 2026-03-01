import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(request) {
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
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Badge Flutuante */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 24px',
          backgroundColor: 'rgba(56, 189, 248, 0.1)',
          border: '2px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '100px',
          marginBottom: '30px',
        }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#38bdf8', letterSpacing: '3px' }}>
            ENGENHEIRO DE SOLUÇÕES
          </span>
        </div>
        
        {/* Nome Principal */}
        <h1 style={{ fontSize: '80px', fontWeight: '900', margin: '0 0 20px 0', color: '#ffffff' }}>
          Marcelo Luciano <span style={{ color: '#38bdf8' }}>Filho</span>
        </h1>
        
        {/* Subtítulo */}
        <p style={{ fontSize: '34px', fontWeight: '500', color: '#94a3b8', margin: '0' }}>
          Infraestrutura Linux | Automação | IA Aplicada
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}