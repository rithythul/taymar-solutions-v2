"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, Btn } from "./atoms";
import type { ReactNode } from "react";

function FooterCol({ title, items }: { title: string; items: [string, string | null][] }) {
  return (
    <div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map(([label, href], i) => (
          <li key={i}>
            {href ? (
              <Link href={href} style={{ color: "var(--bg)", fontFamily: "'Geist', sans-serif", fontSize: 14, textDecoration: "none" }}>
                {label}
              </Link>
            ) : (
              <span style={{ fontFamily: "'Geist', sans-serif", fontSize: 14 }}>{label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer(): ReactNode {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <footer style={{ background: "var(--ink)", color: "var(--bg)", padding: "80px 40px 40px", marginTop: 120 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, paddingBottom: 60, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div>
            <Logo size={22} color="var(--bg)" />
            <p style={{ marginTop: 24, fontFamily: "'Newsreader', serif", fontSize: 22, lineHeight: 1.35, letterSpacing: "-0.01em", maxWidth: 380, fontWeight: 300 }}>
              We only win when you do. Performance-first outbound, built for companies serious about pipeline.
            </p>
            <div style={{ marginTop: 32 }}>
              <Btn variant="ghost" href="/contact">
                Start a conversation
              </Btn>
            </div>
          </div>
          <FooterCol
            title="Company"
            items={[
              ["About", "/about"],
              ["Services", "/services"],
              ["Industries", "/industries"],
              ["Contact", "/contact"],
            ]}
          />
          <FooterCol
            title="Reach us"
            items={[
              ["hello@taymarsolutions.com", null],
              ["(813) 555-0142", null],
              ["Tampa, FL", null],
            ]}
          />
          <FooterCol
            title="Hours"
            items={[
              ["Mon–Fri 8a–6p ET", null],
              ["Discovery: 30 min", null],
            ]}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 32, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em" }}>
          <span>© 2026 TAYMAR SOLUTIONS, LLC</span>
          <span>COMMISSION-FIRST · PIPELINE-DRIVEN</span>
          <span>v1.0 — EST. 2024</span>
        </div>
      </div>
    </footer>
  );
}
