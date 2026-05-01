"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, Btn } from "./atoms";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: scrolled ? "color-mix(in oklab, var(--bg) 88%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all 240ms ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ color: "var(--ink)", textDecoration: "none" }}>
          <Logo size={20} />
        </Link>
        <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {items.map((i) => {
            const active = pathname === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                style={{
                  padding: "8px 14px",
                  fontFamily: "'Geist', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: active ? "var(--ink)" : "var(--muted)",
                  position: "relative",
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                }}
              >
                {i.label}
                {active && <span style={{ position: "absolute", bottom: 2, left: 14, right: 14, height: 1, background: "var(--accent)" }}></span>}
              </Link>
            );
          })}
          <div style={{ marginLeft: 16 }}>
            <Btn size="sm" href="/contact">
              Book a call
            </Btn>
          </div>
        </nav>
      </div>
    </header>
  );
}
