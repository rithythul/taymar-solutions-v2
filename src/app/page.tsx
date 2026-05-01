import { Btn, CtaBlock, Eyebrow, Placeholder, Stat } from "@/components/site/atoms";

export default function HomePage() {
  return (
    <div>
      <section style={{ padding: "60px 40px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <Eyebrow num="01">Sales outsourcing, performance-first</Eyebrow>
            <h1
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "clamp(56px, 7.2vw, 116px)",
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                fontWeight: 300,
                margin: "32px 0 0",
                color: "var(--ink)",
              }}
            >
              Pipeline that <em style={{ fontStyle: "italic", color: "var(--accent)" }}>pays</em>
              <br />
              for itself.
            </h1>
            <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 19, lineHeight: 1.55, color: "var(--muted)", maxWidth: 560, marginTop: 36 }}>
              Taymar Solutions is a commission-first outbound team. We find your buyers, qualify them, and book the meetings — you only pay when we deliver. No retainers, no risk, no head-count.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 40, alignItems: "center" }}>
              <Btn size="lg" href="/contact">Book a discovery call</Btn>
              <Btn variant="plain" href="/services">How it works</Btn>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Placeholder label="hero — sales floor / outreach" aspect="3/4" />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
              <span>Est. 2024</span>
              <span>Tampa, FL</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "20px 0", overflow: "hidden", background: "var(--surface)" }}>
        <div style={{ display: "flex", gap: 64, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", whiteSpace: "nowrap", animation: "marquee 40s linear infinite" }}>
          {"Cold outreach · Lead qualification · Appointment setting · Multi-channel · Phone · Email · LinkedIn · ICP definition · Objection handling · Pipeline reporting · "
            .repeat(3)
            .split(" · ")
            .map((s, i) => (
              <span key={i}>{s}</span>
            ))}
        </div>
      </section>

      <section style={{ padding: "120px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <Eyebrow num="02">A short introduction</Eyebrow>
          <div>
            <p style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.25, letterSpacing: "-0.02em", color: "var(--ink)", fontWeight: 300, margin: 0 }}>
              We partner with companies that need consistent pipeline growth — but don&apos;t want the cost, ramp time, or risk of building a full in-house outbound team.{" "}
              <em style={{ color: "var(--accent)" }}>Our model is simple: we win when you win.</em>
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 60 }}>
          <div>
            <Eyebrow num="03">What we do</Eyebrow>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(40px, 4.5vw, 72px)", letterSpacing: "-0.025em", lineHeight: 1, fontWeight: 300, margin: "24px 0 0" }}>
              Three motions.
              <br />
              One outcome.
            </h2>
          </div>
          <Btn variant="plain" href="/services">All services</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--ink)" }}>
          {[
            { n: "01", title: "Cold Outreach", body: "Multi-channel sequences across phone, email, and LinkedIn — built around your ICP, voiced like a human, paced to land." },
            { n: "02", title: "Lead Qualification", body: "Every conversation runs through a structured qualification framework. You only see opportunities that match your criteria." },
            { n: "03", title: "Appointment Setting", body: "Booked meetings on your calendar, with full context delivered to your sales team — handoff-ready, never cold." },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "40px 32px 48px",
                borderRight: i < 2 ? "1px solid var(--line)" : "none",
                borderBottom: "1px solid var(--ink)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                minHeight: 300,
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em" }}>{s.n}</div>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 32, fontWeight: 400, letterSpacing: "-0.02em", margin: 0 }}>{s.title}</h3>
              <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 15, lineHeight: 1.6, color: "var(--muted)", margin: 0, flex: 1 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--ink)", color: "var(--bg)", padding: "120px 40px", marginTop: 60 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 120 }}>
              <Eyebrow num="04">Why Taymar</Eyebrow>
              <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(40px, 4.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.025em", fontWeight: 300, margin: "24px 0 0", color: "var(--bg)" }}>
                Skin in the
                <br />
                same game.
              </h2>
              <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", marginTop: 32, maxWidth: 360 }}>
                Most outbound agencies invoice whether or not the phone rings. We don&apos;t. The structure forces alignment — if your pipeline isn&apos;t moving, neither is ours.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                ["Commission-first pricing", "You don't carry the burden of a base. We earn on results, so we're motivated to deliver them."],
                ["No long-term lock-in", "Month-to-month engagements. Stay because the numbers work, not because a contract says you have to."],
                ["Real humans on the phone", "We don't outsource the actual conversations. Your prospects talk to people who can hold a real exchange."],
                ["Process you can audit", "Cadence, scripts, lists, and reporting — fully documented. You see what's running, what's working, and what isn't."],
                ["Built for the messy middle", "Whether you're validating a new offer or scaling an established one, the model flexes to where you actually are."],
              ].map(([t, b], i) => (
                <div
                  key={i}
                  style={{
                    padding: "32px 0",
                    borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 32,
                  }}
                >
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 26, fontWeight: 400, letterSpacing: "-0.015em", margin: 0, color: "var(--bg)" }}>{t}</h3>
                    <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: "10px 0 0", maxWidth: 540 }}>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow num="05">By the numbers</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, marginTop: 60, paddingTop: 60, borderTop: "1px solid var(--line)" }}>
          <Stat value="0" suffix="$" label="Up-front cost. You don't pay until a meeting books." />
          <Stat value="38" label="Industries served across SaaS, services, and trades." />
          <Stat value="14" suffix=" days" label="Typical ramp from kickoff to first booked call." />
          <Stat value="3.2" suffix="x" label="Average pipeline lift in our clients' first quarter." />
        </div>
      </section>

      <section style={{ padding: "60px 40px 120px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div>
            <Eyebrow num="06">Who we serve</Eyebrow>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.025em", fontWeight: 300, margin: "24px 0 32px" }}>
              Built for B2B teams that
              <br />
              <em style={{ color: "var(--accent)" }}>need motion</em>, not theater.
            </h2>
            <Btn variant="ghost" href="/industries">See all industries</Btn>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {["B2B SaaS & technology", "Professional services", "Financial & insurance", "Construction & trades", "Healthcare services", "Logistics & supply chain"].map((label, i) => (
              <a
                key={i}
                href="/industries"
                style={{ padding: "28px 0", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", textDecoration: "none", color: "var(--ink)" }}
              >
                <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--muted)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontFamily: "'Newsreader', serif", fontSize: 28, fontWeight: 400, letterSpacing: "-0.015em" }}>{label}</span>
                </div>
                <span style={{ color: "var(--muted)" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
