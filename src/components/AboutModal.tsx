import logoPng from "../assets/LOGO.png";
import { TranslationKey } from "../translations";

interface AboutModalProps {
  showAboutModal: boolean;
  setShowAboutModal: (show: boolean) => void;
  lang: "zh" | "en";
  t: (key: TranslationKey) => string;
}

export const AboutModal = ({
  showAboutModal,
  setShowAboutModal,
  lang,
  t,
}: AboutModalProps) => {
  if (!showAboutModal) return null;

  const isZh = lang === "zh";

  return (
    <div className="preferences-modal-overlay" style={{ zIndex: 10000 }}>
      <div className="preferences-modal" style={{ maxWidth: "420px", height: "auto", maxHeight: "580px" }}>
        <div className="preferences-modal-header" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <span className="preferences-modal-title">
            {isZh ? "關於此應用程式" : "About Application"}
          </span>
          <button
            className="btn-close-modal"
            onClick={() => setShowAboutModal(false)}
            style={{ fontSize: "1.5rem" }}
          >
            &times;
          </button>
        </div>

        <div className="preferences-modal-body" style={{ padding: "2rem 1.5rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto" }}>
          {/* Logo */}
          <div style={{ marginBottom: "1.25rem" }}>
            <img
              src={logoPng}
              alt="Logo"
              style={{
                height: "6.5rem",
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 0 15px rgba(36, 198, 220, 0.3))",
              }}
            />
          </div>

          {/* App Name */}
          <h2 style={{
            fontSize: "1.5rem",
            margin: "0 0 0.25rem 0",
            fontWeight: 800,
            background: "linear-gradient(135deg, #FFF 30%, #24C6DC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            VirtManager-Flash
          </h2>

          {/* Version */}
          <div style={{
            fontSize: "0.85rem",
            fontFamily: "monospace",
            color: "#24C6DC",
            marginBottom: "1rem",
            background: "rgba(36, 198, 220, 0.1)",
            padding: "0.2rem 0.6rem",
            borderRadius: "4px",
            display: "inline-block"
          }}>
            v{__APP_VERSION__}
          </div>

          {/* Description */}
          <p style={{
            fontSize: "0.85rem",
            color: "#94A3B8",
            lineHeight: "1.5",
            margin: "0 0 1.5rem 0",
            padding: "0 0.5rem"
          }}>
            {isZh
              ? "一個使用 Tauri、React 與 Rust 打造的極速、現代化 KVM/libvirt 虛擬機管理工具。"
              : "A lightning-fast, modern KVM/libvirt virtual machine manager built with Tauri, React, and Rust."}
          </p>

          {/* Details / Link */}
          <div style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "1.25rem",
            textAlign: "left",
            fontSize: "0.8rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
            width: "100%"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#64748B" }}>GitHub</span>
              <a
                href="https://github.com/owan-io1992/VirtManager-Flash"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#24C6DC",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "opacity 0.2s"
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                owan-io1992/VirtManager-Flash
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#64748B" }}>{isZh ? "授權條款" : "License"}</span>
              <span style={{ color: "#E2E8F0" }}>MIT License</span>
            </div>
          </div>
        </div>

        <div className="preferences-modal-footer" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <button
            className="btn-save-settings"
            style={{ margin: 0, width: "100%" }}
            onClick={() => setShowAboutModal(false)}
          >
            {t("btn_close")}
          </button>
        </div>
      </div>
    </div>
  );
};
