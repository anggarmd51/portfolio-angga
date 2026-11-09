import { ImageResponse } from "next/og";

export const alt =
  "Muhammad Angga Ramadhan — Strategic Account Manager & B2B Growth Specialist";
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
          backgroundColor: "#0B192C",
          color: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Subtle accent border at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#F5B027",
          }}
        />

        {/* Monogram & Title section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Monogram Box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#1E3A5F",
                border: "1px solid #334E68",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F5B027",
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              AR
            </div>
            <div
              style={{
                fontSize: "14px",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#94A3B8",
                fontWeight: 600,
              }}
            >
              Executive Portfolio
            </div>
          </div>

          {/* Name */}
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

        {/* Approved Taglines & Restrained Accent Line */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#F5B027",
              borderRadius: "2px",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontFamily: "sans-serif",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#F5B027",
                lineHeight: 1.3,
              }}
            >
              Strategic Account Manager &amp; B2B Growth Specialist.
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: "#CBD5E1",
                lineHeight: 1.4,
              }}
            >
              Bridging Financial Services and B2B SaaS Technology.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
