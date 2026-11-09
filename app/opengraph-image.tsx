import { ImageResponse } from "next/og";

export const alt = "Muhammad Angga Ramadhan — Sales & Business Development, Medan";
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
          backgroundColor: "#0B0F19",
          color: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#10B981",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#10271F",
                border: "1px solid #166534",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#34D399",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              AR
            </div>
            <div
              style={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#CBD5E1",
                fontWeight: 600,
              }}
            >
              Portofolio Sales &amp; Business Development
            </div>
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            Muhammad Angga Ramadhan
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#10B981",
              borderRadius: "2px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#34D399",
                lineHeight: 1.3,
              }}
            >
              Sales, Business Development &amp; Account Management
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: "#CBD5E1",
                lineHeight: 1.4,
              }}
            >
              Pembiayaan, perbankan, dan perangkat lunak B2B di Medan
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
