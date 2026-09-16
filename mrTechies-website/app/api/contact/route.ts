import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  });

  // EMAIL TO YOU
  await transporter.sendMail({
    from: `"MrTechies Website" <${process.env.CONTACT_EMAIL}>`,
    to: process.env.CONTACT_EMAIL,
    subject: "📩 New Website Enquiry",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  // AUTO‑REPLY TO USER
  await transporter.sendMail({
    from: `"MrTechies Team" <${process.env.CONTACT_EMAIL}>`,
    to: email,
    subject: "We received your enquiry – MrTechies",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for contacting <strong>MrTechies</strong>.</p>
      <p>We’ve received your enquiry and our team will reach out to you within
      <strong>5–10 minutes</strong>.</p>
      <p>— MrTechies Team</p>
    `,
  });

  return NextResponse.json({ success: true });
}
