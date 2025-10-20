// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// 봇 방지용 허니팟 필드 (폼에 hidden으로 name="company" 추가)
const HONEYPOT = "company";

export async function POST(request: Request) {
  try {
    // Lazily construct the Resend client so the module can be imported during
    // build without requiring RESEND_API_KEY to be set. If the key is missing
    // we'll short-circuit with a helpful error message.
    const apiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !contactTo) {
      console.warn("Resend email not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL to enable contact form.");
      return NextResponse.json({ success: false, message: "Email provider not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL in environment." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { name, email, message, [HONEYPOT]: bot } = await request.json();

    // 간단 검증
    if (bot) return NextResponse.json({ success: true }, { status: 200 });
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    // 메일 전송
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // 운영 전환 시 본인 도메인 발신자로 교체
      to: process.env.CONTACT_TO_EMAIL!,                 // 받을 이메일 (환경변수)
  replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>Portfolio Contact</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, message: "Failed to send message. Please try again." }, { status: 500 });
  }
}
