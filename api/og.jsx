import { ImageResponse } from "@vercel/og";

export default async function handler(request) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background:
            "radial-gradient(1200px 630px at 35% 45%, #1d4ed8 0%, #0b1220 55%, #070a12 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 18px",
            borderRadius: 999,
            border: "1px solid rgba(56,189,248,0.35)",
            backgroundColor: "rgba(56,189,248,0.10)",
            width: "fit-content",
            marginBottom: 28,
            letterSpacing: 3,
            fontSize: 18,
            fontWeight: 800,
            color: "#38bdf8",
          }}
        >
          DESENVOLVEDOR FRONTEND
        </div>

        <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.05 }}>
          Marcelo Luciano <span style={{ color: "#38bdf8" }}>Filho</span>
        </div>

        <div
          style={{
            marginTop: 22,
            fontSize: 30,
            fontWeight: 600,
            color: "rgba(226,232,240,0.85)",
          }}
        >
          React • JavaScript • Tailwind CSS • Deploy
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 22,
            color: "rgba(148,163,184,0.95)",
          }}
        >
          Componentização de UI | Gerenciamento de Estado | Visão Full-Cycle
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}