// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 봇 방지용 허니팟 필드 (폼에 hidden으로 name="company" 추가)
const HONEYPOT = "company";

export async function POST(request: Request) {
  try {
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
      reply_to: email,
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
