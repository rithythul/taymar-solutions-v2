import { Btn, CtaBlock, Eyebrow, Headline } from "@/components/site/atoms";

export default function HomePage() {
  return (
    <div>
      <section data-pad-x style={{ padding: "60px 40px 80px", maxWidth: 1280, margin: "0 auto" }}>
        <div data-hero-row style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 56, gap: 16, flexWrap: "wrap" }}>
          <Eyebrow>Sales outsourcing · Austin, TX</Eyebrow>
          <span data-hide-sm style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)" }}>
            Est. 2024 · 5 reps · No AI agents
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--display)",
            fontWeight: 800,
            fontSize: "clamp(56px, 11vw, 220px)",
            lineHeight: 0.84,
            letterSpacing: "-0.015em",
            textTransform: "uppercase",
            margin: 0,
            color: "var(--ink)",
          }}
        >
          Pipeline
          <br />
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.18em" }}>
            <span>that</span>
            <span
              style={{
                background: "var(--rust)",
                color: "var(--rustInk)",
                padding: "0 0.18em",
                fontWeight: 900,
                transform: "skewX(-4deg)",
                display: "inline-block",
              }}
            >
              pays
            </span>
          </span>
          <br />
          for itself.
        </h1>

        <div data-stack style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, marginTop: 64, alignItems: "start" }}>
          <p style={{ fontFamily: "var(--body)", fontSize: 21, lineHeight: 1.5, color: "var(--ink)", margin: 0, maxWidth: 560, fontWeight: 400 }}>
            We&apos;re a small outbound team in Austin. We find your buyers, qualify them, and book the meetings. You pay us when meetings land on your calendar. No retainer, no SOW, no head-count.
          </p>
          <div
            style={{
              background: "var(--ink)",
              color: "var(--paper)",
              padding: "32px 36px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: -8, left: -8, right: 8, bottom: 8, border: "2px solid var(--ink)", pointerEvents: "none" }} />
            <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--rust)", display: "block", marginBottom: 16 }}>
              What this isn&apos;t
            </span>
            <p style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.55, margin: 0 }}>
              Not a $9k/month retainer. Not a 47-slide strategy deck. Not a tool that promises &ldquo;100x your outbound with AI.&rdquo; A team of five who pick up the phone.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 20, marginTop: 56, alignItems: "center", flexWrap: "wrap" }}>
          <Btn size="lg" href="/contact">Book a discovery call</Btn>
          <Btn variant="plain" href="/services">How it works</Btn>
        </div>
      </section>

      <section data-pad-x style={{ background: "var(--ink)", color: "var(--paper)", padding: "32px 40px", overflow: "hidden", borderTop: "2px solid var(--rust)", borderBottom: "2px solid var(--rust)" }}>
        <div data-banner style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 48px)", letterSpacing: "-0.005em", textTransform: "uppercase", lineHeight: 1 }}>
            No meetings, no invoice.
          </span>
          <span style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
            That&apos;s the whole pitch ↘
          </span>
        </div>
      </section>

      <section data-pad-x data-pad-y-lg style={{ padding: "120px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div data-stack style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <Eyebrow>The pitch, in two sentences</Eyebrow>
          <div>
            <p style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "clamp(32px, 3.8vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "var(--ink)", margin: 0 }}>
              Most outbound agencies invoice whether or not the phone rings. We don&apos;t. Our reps get paid when your reps get meetings. So do we.
            </p>
          </div>
        </div>
      </section>

      <section data-pad-x style={{ padding: "60px 40px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div data-hero-row style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, gap: 24, flexWrap: "wrap" }}>
          <div>
            <Eyebrow>What we do</Eyebrow>
            <div style={{ marginTop: 24 }}>
              <Headline size="xl" tag="h2">
                Phone. Email.
                <br />
                LinkedIn.
                <br />
                <span style={{ color: "var(--rust)" }}>One line on the invoice.</span>
              </Headline>
            </div>
          </div>
          <Btn variant="plain" href="/services">Full services</Btn>
        </div>

        <div style={{ borderTop: "3px solid var(--ink)" }}>
          {[
            {
              n: "01",
              title: "Cold outreach",
              body:
                "Phone Tuesday. Email Wednesday. LinkedIn Friday. Not because we read a Reddit thread about it, because that's the rhythm that gets calls back.",
              stats: [
                ["Volume", "600–2,400 / mo"],
                ["Reply rate", "Typically 6–11%"],
                ["Channels", "Phone-led, email + LinkedIn"],
              ] as [string, string][],
            },
            {
              n: "02",
              title: "Qualification",
              body:
                "Replies and dials don't matter if the meetings are wrong. Every prospect runs through your criteria before they reach your calendar.",
              stats: [
                ["Reject rate", "About 1 in 3"],
                ["Rubric", "Yours, not ours"],
                ["Records", "Transcripts in your CRM"],
              ] as [string, string][],
            },
            {
              n: "03",
              title: "Appointment setting",
              body:
                "Calendar invite plus a one-page brief, sent to your rep 24 hours before. They walk in with context. The buyer doesn’t hear “remind me what you do again?”",
              stats: [
                ["Target show rate", "78–85%"],
                ["Brief", "Buyer, role, problem"],
                ["Handoff", "Tuned to your motion"],
              ] as [string, string][],
            },
          ].map((s, i, arr) => (
            <article
              key={s.n}
              data-3col-row
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1.2fr 1fr",
                gap: 48,
                padding: "56px 0",
                borderBottom: i === arr.length - 1 ? "3px solid var(--ink)" : "1px solid var(--line)",
                alignItems: "start",
              }}
            >
              <span data-col-num style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 88, lineHeight: 0.9, color: "var(--rust)", letterSpacing: "-0.01em" }}>
                {s.n}
              </span>
              <div>
                <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "clamp(36px, 4vw, 64px)", letterSpacing: "-0.005em", textTransform: "uppercase", margin: 0, lineHeight: 0.92 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.6, color: "var(--inkSoft)", margin: "20px 0 0", maxWidth: 460 }}>
                  {s.body}
                </p>
              </div>
              <dl data-col-stats style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", gap: "14px 24px", alignContent: "start" }}>
                {s.stats.map(([k, v]) => (
                  <div key={k} style={{ display: "contents" }}>
                    <dt style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
                      {k}
                    </dt>
                    <dd style={{ margin: 0, fontFamily: "var(--display)", fontWeight: 600, fontSize: 20, color: "var(--ink)", letterSpacing: "0.01em" }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section data-pad-x data-pad-y-lg style={{ background: "var(--ink)", color: "var(--paper)", padding: "120px 40px", marginTop: 40 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div data-stack style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div data-sticky style={{ position: "sticky", top: 120 }}>
              <Eyebrow tone="dark">Why Taymar</Eyebrow>
              <div style={{ marginTop: 24 }}>
                <Headline size="xl" tag="h2" color="var(--paper)">
                  We get paid
                  <br />
                  when <span style={{ color: "var(--rust)" }}>you do</span>.
                </Headline>
              </div>
              <p style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", marginTop: 32, maxWidth: 380 }}>
                That&apos;s the whole pitch. Five things follow from it. Read them, then ignore the ones that don&apos;t matter to you.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                ["Commission, not retainer", "We get paid per booked, qualified meeting that shows up. No invoice for “strategy hours.” If your pipeline is flat this month, so is ours."],
                ["Month-to-month", "Stay because the numbers work. Leave when they don’t. No 12-month MSA with an auto-renew clause buried on page 14."],
                ["Humans on the phone", "Our reps work from frameworks, not scripts. Your prospects talk to people who can answer a follow-up question without hitting mute."],
                ["Friday email, every Friday", "Dials, conversations, meetings, no-shows. The same dashboard we look at, mailed to you. If a week looks bad, we say so before you ask."],
                ["We’ll tell you no", "If your offer isn’t ready for outbound, the call ends with us saying that. We’d rather lose a discovery than burn a quarter on a list that won’t convert."],
              ].map(([t, b], i, arr) => (
                <div
                  key={i}
                  data-num-row
                  style={{
                    padding: "32px 0",
                    borderTop: "1px solid rgba(255,255,255,0.16)",
                    borderBottom: i === arr.length - 1 ? "1px solid rgba(255,255,255,0.16)" : "none",
                    display: "grid",
                    gridTemplateColumns: "72px 1fr",
                    gap: 32,
                    alignItems: "baseline",
                  }}
                >
                  <span data-col-num style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: 28, color: "var(--rust)", letterSpacing: "-0.005em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 28, letterSpacing: "0.005em", textTransform: "uppercase", margin: 0, color: "var(--paper)" }}>
                      {t}
                    </h3>
                    <p style={{ fontFamily: "var(--body)", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.7)", margin: "10px 0 0", maxWidth: 560 }}>
                      {b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-pad-x data-pad-y-lg style={{ padding: "120px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <Eyebrow>The math</Eyebrow>
        <div data-stack style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              ["1,200", "Contacts worked per quarter"],
              ["350", "Live conversations"],
              ["18–24", "Qualified meetings booked"],
              ["$300–$650", "Commission per booked meeting"],
            ].map(([k, v]) => (
              <div key={k} data-num-row style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 32, alignItems: "baseline", borderBottom: "1px solid var(--line)", paddingBottom: 24 }}>
                <span style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "clamp(48px, 5.6vw, 88px)", letterSpacing: "-0.015em", color: "var(--ink)", lineHeight: 0.95 }}>
                  {k}
                </span>
                <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "clamp(24px, 2.6vw, 36px)", lineHeight: 1.1, letterSpacing: "-0.005em", textTransform: "uppercase", color: "var(--ink)", margin: 0 }}>
              A typical quarter. Roughly.
            </p>
            <p style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.6, color: "var(--inkSoft)", marginTop: 24, maxWidth: 460 }}>
              That math doesn&apos;t work for everyone. If your average contract is $4k and your sales team can&apos;t take more than two meetings a week, we&apos;re not the right fit. Call us and we&apos;ll tell you that on the first conversation.
            </p>
            <div style={{ marginTop: 32 }}>
              <Btn variant="ghost" href="/services">See the work</Btn>
            </div>
          </div>
        </div>
      </section>

      <section data-pad-x data-pad-y-lg style={{ background: "var(--paperRaised)", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)", padding: "100px 40px" }}>
        <div data-stack style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div>
            <Eyebrow>Who we serve</Eyebrow>
            <div style={{ marginTop: 24 }}>
              <Headline size="lg" tag="h2">
                B2B teams
                <br />
                that need
                <br />
                <span style={{ color: "var(--rust)" }}>motion,</span>
                <br />
                not theater.
              </Headline>
            </div>
            <div style={{ marginTop: 32 }}>
              <Btn variant="ghost" href="/industries">All six verticals</Btn>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              "B2B SaaS & technology",
              "Professional services",
              "Financial & insurance",
              "Construction & trades",
              "Healthcare services",
              "Logistics & supply chain",
            ].map((label, i, arr) => (
              <a
                key={i}
                href="/industries"
                data-vertical-row
                style={{
                  padding: "28px 0",
                  borderTop: "1px solid var(--line)",
                  borderBottom: i === arr.length - 1 ? "1px solid var(--line)" : "none",
                  display: "grid",
                  gridTemplateColumns: "60px 1fr 24px",
                  gap: 24,
                  alignItems: "center",
                  textDecoration: "none",
                  color: "var(--ink)",
                }}
              >
                <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.14em", color: "var(--rust)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "clamp(24px, 2.6vw, 36px)", letterSpacing: "0.005em", textTransform: "uppercase", lineHeight: 1 }}>
                  {label}
                </span>
                <span style={{ fontFamily: "var(--display)", fontWeight: 700, color: "var(--muted)" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
