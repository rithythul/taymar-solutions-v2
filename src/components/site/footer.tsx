"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, Btn } from "./atoms";
import type { ReactNode } from "react";

function FooterCol({ title, items }: { title: string; items: [string, string | null][] }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--rust)", marginBottom: 24 }}>
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {items.map(([label, href], i) => (
          <li key={i}>
            {href ? (
              <Link
                href={href}
                style={{
                  color: "var(--paper)",
                  fontFamily: "var(--display)",
                  fontWeight: 600,
                  fontSize: 16,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ) : (
              <span style={{ fontFamily: "var(--body)", fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.75)" }}>{label}</span>
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
    <footer style={{ background: "var(--ink)", color: "var(--paper)", padding: "80px 40px 40px", marginTop: 80, borderTop: "4px solid var(--rust)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, paddingBottom: 60, borderBottom: "1px solid rgba(255,255,255,0.16)" }}>
          <div>
            <Logo size={24} color="var(--paper)" accent="var(--rust)" />
            <p style={{ marginTop: 28, fontFamily: "var(--display)", fontWeight: 600, fontSize: "clamp(22px, 2vw, 28px)", lineHeight: 1.15, textTransform: "uppercase", letterSpacing: "-0.005em", maxWidth: 420, color: "var(--paper)" }}>
              We get paid when you get meetings.
            </p>
            <p style={{ marginTop: 16, fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.7)", maxWidth: 420 }}>
              Five reps in Austin, working B2B outbound across the US and Canada.
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
              ["Austin, TX", null],
              ["(512) 766-8447", null],
              ["Working US + Canada", null],
            ]}
          />
          <FooterCol
            title="Hours"
            items={[
              ["Mon to Fri, 8a to 6p ET", null],
              ["Discovery call: 30 min", null],
              ["Reply window: 1 business day", null],
            ]}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
          <span>© 2026 Taymar Solutions, LLC</span>
          <span>Commission-First · Pipeline-Driven</span>
          <span>v1.0 — Est. 2024</span>
        </div>
      </div>
    </footer>
  );
}
