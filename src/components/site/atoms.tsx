"use client";
import { useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";

export function Logo({ size = 22, color = "currentColor", accent }: { size?: number; color?: string; accent?: string }) {
  const stamp = accent || "var(--rust)";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, color }}>
      <span
        style={{
          fontFamily: "var(--display)",
          fontWeight: 900,
          fontSize: size + 2,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color,
          lineHeight: 1,
        }}
      >
        Taymar
      </span>
      <span style={{ width: 12, height: 2, background: stamp, display: "inline-block" }} />
      <span
        style={{
          fontFamily: "var(--display)",
          fontWeight: 500,
          fontSize: size + 2,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color,
          lineHeight: 1,
        }}
      >
        Solutions
      </span>
    </div>
  );
}

export function Eyebrow({ children, num, tone = "light" }: { children: ReactNode; num?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <span style={{ width: 28, height: 4, background: "var(--rust)", display: "inline-block" }} />
      {num && (
        <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 14, letterSpacing: "0.06em", color: "var(--rust)" }}>
          {num}
        </span>
      )}
      <span
        style={{
          fontFamily: "var(--display)",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,0.75)" : "var(--ink)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "plain";
  onClick?: () => void;
  href?: string;
  arrow?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
};

export function Btn({ children, variant = "primary", onClick, href, arrow = true, size = "md", type = "button" }: BtnProps) {
  const [hover, setHover] = useState(false);
  const pad = size === "lg" ? "20px 32px" : size === "sm" ? "10px 18px" : "16px 26px";
  const fs = size === "lg" ? 18 : size === "sm" ? 13 : 16;
  const styles: Record<string, CSSProperties> = {
    primary: {
      background: hover ? "var(--ink)" : "var(--rust)",
      color: "white",
      border: "2px solid " + (hover ? "var(--ink)" : "var(--rust)"),
    },
    ghost: {
      background: hover ? "var(--ink)" : "transparent",
      color: hover ? "var(--paper)" : "var(--ink)",
      border: "2px solid var(--ink)",
    },
    plain: {
      background: "transparent",
      color: "var(--ink)",
      border: "none",
      padding: 0,
      textDecoration: "none",
      borderBottom: hover ? "2px solid var(--rust)" : "2px solid var(--ink)",
      paddingBottom: 2,
    },
  };
  const style: CSSProperties = {
    ...styles[variant],
    padding: variant === "plain" ? "0 0 2px 0" : pad,
    fontFamily: "var(--display)",
    fontSize: fs,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    transition: "all 180ms ease",
    lineHeight: 1,
  };
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          style={{
            transform: hover ? "translateX(4px)" : "translateX(0)",
            transition: "transform 180ms ease",
            display: "inline-block",
            fontWeight: 800,
          }}
        >
          →
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={style}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={style}>
      {inner}
    </button>
  );
}

export function Headline({
  children,
  size = "xl",
  color = "var(--ink)",
  tag: Tag = "h2",
}: {
  children: ReactNode;
  size?: "lg" | "xl" | "xxl";
  color?: string;
  tag?: keyof React.JSX.IntrinsicElements;
}) {
  const fs = size === "xxl" ? "clamp(64px, 9vw, 168px)" : size === "xl" ? "clamp(48px, 6.5vw, 112px)" : "clamp(36px, 4.2vw, 72px)";
  const style: CSSProperties = {
    fontFamily: "var(--display)",
    fontWeight: 800,
    textTransform: "uppercase",
    fontSize: fs,
    lineHeight: 0.86,
    letterSpacing: "-0.01em",
    margin: 0,
    color,
  };
  return <Tag style={style}>{children}</Tag>;
}

export function CtaBlock({ variant = "default" }: { variant?: "default" | "services" }) {
  const title =
    variant === "services"
      ? "Tell us what you sell."
      : "Thirty minutes.";
  const sub =
    variant === "services"
      ? "We'll tell you if outbound fits."
      : "On the phone. No deck.";
  const body =
    variant === "services"
      ? "Three questions: who buys, what they spend, how fast you can take calls. If the math doesn't work, we say so. On the first call."
      : "If we're the wrong shop, we'll point you at one we trust. The call is free either way. We answer the phone Monday to Friday, 8a to 6p Eastern.";
  return (
    <section data-pad-x data-pad-y-lg style={{ padding: "120px 40px 100px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 56 }}>
        <Eyebrow>{variant === "services" ? "Next step" : "Get in touch"}</Eyebrow>
        <div style={{ marginTop: 28 }}>
          <Headline size="xxl" tag="h2">
            {title}
            <br />
            <span style={{ color: "var(--rust)" }}>{sub}</span>
          </Headline>
        </div>
        <div data-stack style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "end", marginTop: 48 }}>
          <p style={{ fontFamily: "var(--body)", fontSize: 18, lineHeight: 1.55, color: "var(--inkSoft)", maxWidth: 600, margin: 0 }}>
            {body}
          </p>
          <Btn size="lg" href="/contact">
            Book the call
          </Btn>
        </div>
      </div>
    </section>
  );
}
