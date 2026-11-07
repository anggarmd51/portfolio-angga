import { ImageResponse } from "next/og";

export const alt = "Muhammad Angga Ramadhan: Sales dan Business Development";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0D3B33",
          color: "#F1F4F2",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#F1F4F2",
            }}
          >
            Muhammad Angga Ramadhan
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#F1F4F2",
              opacity: 0.9,
            }}
          >
            Sales dan Business Development
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "14px",
              backgroundColor: "#F2B705",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 24,
              color: "#F1F4F2",
              opacity: 0.8,
            }}
          >
            <span>Pembiayaan · Perbankan · SaaS B2B</span>
            <span>Medan, Sumatera Utara</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
