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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const opaque = scrolled || open;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: opaque ? "var(--paper)" : "transparent",
        borderBottom: opaque ? "2px solid var(--ink)" : "2px solid transparent",
        transition: "background 200ms ease, border-color 200ms ease",
      }}
    >
      <div
        data-pad-x
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "18px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link href="/" style={{ color: "var(--ink)", textDecoration: "none" }}>
          <Logo size={20} accent="var(--rust)" />
        </Link>
        <nav className="nav-desktop" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {items.map((i) => {
            const active = pathname === i.href;
            return (
              <Link
                key={i.href}
                href={i.href}
                style={{
                  padding: "10px 14px",
                  fontFamily: "var(--display)",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: active ? "var(--ink)" : "var(--muted)",
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                {i.label}
                {active && <span style={{ position: "absolute", bottom: 4, left: 14, right: 14, height: 3, background: "var(--rust)" }}></span>}
              </Link>
            );
          })}
          <div style={{ marginLeft: 16 }}>
            <Btn size="sm" href="/contact">
              Book a call
            </Btn>
          </div>
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div id="nav-drawer" className={`nav-drawer${open ? " open" : ""}`}>
        {items.map((i) => (
          <Link key={i.href} href={i.href} data-active={pathname === i.href}>
            {i.label}
          </Link>
        ))}
        <div className="nav-drawer-cta">
          <Btn href="/contact">Book a call</Btn>
        </div>
      </div>
    </header>
  );
}
