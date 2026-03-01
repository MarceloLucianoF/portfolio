import { ImageResponse } from '@vercel/og';
import React from 'react';

const AVATAR_URL = 'https://avatars.githubusercontent.com/u/103156755?v=4';

export default async function handler(request) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundImage: 'linear-gradient(to bottom right, #0f172a, #020617, #010409)',
          color: 'white',
          padding: '40px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Lado Esquerdo: Texto */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '650px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '99px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              marginBottom: '24px',
            }}
          >
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Engenheiro de Soluções
            </span>
          </div>

          <h1 style={{ fontSize: '64px', fontWeight: '900', color: 'white', margin: '0 0 16px 0', lineHeight: '1.1' }}>
            Marcelo Luciano <span style={{ color: '#2563eb' }}>Filho</span>
          </h1>
          
          <p style={{ fontSize: '24px', fontWeight: '500', color: '#94a3b8', margin: '0', lineHeight: '1.4' }}>
            Infraestrutura Linux | Automação | IA Aplicada a Operações Críticas
          </p>
        </div>

        {/* Lado Direito: Foto de Perfil */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={AVATAR_URL}
            alt="Marcelo Luciano Filho"
            style={{
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              border: '8px solid #1e293b',
              objectFit: 'cover',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}