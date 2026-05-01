"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";

export function Logo({ size = 22, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, color }}>
      <svg width={size + 4} height={size + 4} viewBox="0 0 28 28" fill="none">
        <rect x="2" y="2" width="24" height="24" rx="3" stroke={color} strokeWidth="1.5" />
        <path d="M8 9 H20 M14 9 V20" stroke={color} strokeWidth="2" strokeLinecap="square" />
        <circle cx="20" cy="20" r="2.5" fill={color} />
      </svg>
      <span style={{ fontFamily: "'Newsreader', serif", fontWeight: 500, fontSize: size, letterSpacing: "-0.02em" }}>
        Taymar<span style={{ opacity: 0.5 }}>·</span>Solutions
      </span>
    </div>
  );
}

export function Eyebrow({ children, num }: { children: ReactNode; num?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
      {num && <span style={{ color: "var(--accent)" }}>{num}</span>}
      <span style={{ width: 24, height: 1, background: "var(--line)" }}></span>
      <span>{children}</span>
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
  const pad = size === "lg" ? "18px 28px" : size === "sm" ? "10px 16px" : "14px 22px";
  const fs = size === "lg" ? 16 : size === "sm" ? 13 : 14;
  const styles: Record<string, CSSProperties> = {
    primary: { background: hover ? "var(--ink)" : "var(--accent)", color: "white", border: "1px solid transparent" },
    ghost: { background: hover ? "var(--ink)" : "transparent", color: hover ? "var(--surface)" : "var(--ink)", border: "1px solid var(--ink)" },
    plain: { background: "transparent", color: "var(--ink)", border: "none", padding: 0, textDecoration: hover ? "underline" : "none" },
  };
  const style: CSSProperties = {
    ...styles[variant],
    padding: variant === "plain" ? 0 : pad,
    fontFamily: "'Geist', system-ui, sans-serif",
    fontSize: fs,
    fontWeight: 500,
    letterSpacing: "-0.01em",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    transition: "all 200ms ease",
    textDecoration: variant === "plain" && hover ? "underline" : "none",
    textUnderlineOffset: 4,
  };
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <span style={{ transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform 200ms ease", display: "inline-block" }}>→</span>}
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

export function Stat({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const target = parseFloat(value);
          const dur = 1200;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setShown(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          ob.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [value]);
  const display = Number.isInteger(parseFloat(value)) ? Math.round(shown) : shown.toFixed(1);
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontFamily: "'Newsreader', serif", fontSize: 64, fontWeight: 300, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--ink)" }}>
        {display}
        {suffix}
      </div>
      <div style={{ fontFamily: "'Geist', sans-serif", fontSize: 14, color: "var(--muted)", maxWidth: 220, lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

export function Placeholder({ label = "image", aspect = "4/3", height }: { label?: string; aspect?: string; height?: number | string }) {
  return (
    <div
      style={{
        aspectRatio: height ? undefined : aspect,
        height,
        width: "100%",
        background: "repeating-linear-gradient(135deg, var(--soft) 0, var(--soft) 12px, var(--bg) 12px, var(--bg) 24px)",
        border: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--muted)",
      }}
    >
      [ {label} ]
    </div>
  );
}

export function CtaBlock({ variant = "default" }: { variant?: "default" | "services" }) {
  return (
    <section style={{ padding: "100px 40px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ borderTop: "1px solid var(--ink)", paddingTop: 60, display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "end" }}>
        <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.03em", fontWeight: 300, margin: 0 }}>
          {variant === "services" ? (
            <>
              Ready to put it to <em style={{ color: "var(--accent)" }}>work</em>?
            </>
          ) : (
            <>
              Let&apos;s talk about <em style={{ color: "var(--accent)" }}>your pipeline</em>.
            </>
          )}
        </h2>
        <Btn size="lg" href="/contact">
          Start a conversation
        </Btn>
      </div>
    </section>
  );
}
