import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  revenue?: string;
  help?: string;
  message?: string;
};

const TO = "hello@taymarsolutions.com";

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || "Taymar Site <onboarding@resend.dev>";

  if (!key) {
    return NextResponse.json(
      { error: "Email not configured on server." },
      { status: 500 },
    );
  }

  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const company = (data.company || "").trim();
  const message = (data.message || "").trim();
  const role = (data.role || "").trim();
  const revenue = (data.revenue || "").trim();
  const help = (data.help || "").trim();

  if (!name || !email || !company || message.length < 10) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["Role", role || "(not provided)"],
    ["Revenue", revenue || "(not provided)"],
    ["Looking for", help || "(not provided)"],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;color:#16181B;">
      <h2 style="font-size:18px;letter-spacing:0.04em;text-transform:uppercase;border-bottom:2px solid #A23A1A;padding-bottom:10px;">New contact form submission</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:14px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px 8px 0;color:#5C5A53;text-transform:uppercase;letter-spacing:0.08em;font-size:11px;width:140px;vertical-align:top;">${escape(k)}</td><td style="padding:8px 0;">${escape(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #CFC8B7;">
        <div style="color:#5C5A53;text-transform:uppercase;letter-spacing:0.08em;font-size:11px;margin-bottom:8px;">Message</div>
        <div style="white-space:pre-wrap;font-size:15px;line-height:1.55;">${escape(message)}</div>
      </div>
    </div>
  `;

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [TO],
      reply_to: email,
      subject: `New contact: ${name} at ${company}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend send failed", res.status, detail);
    return NextResponse.json(
      { error: "Could not send right now. Please email " + TO + " directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
