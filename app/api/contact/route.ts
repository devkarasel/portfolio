import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { saveMessage } from '@/lib/messages'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body
    if (!name || !email || !message)
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })

    // Save to messages.json for admin panel
    saveMessage({ name, email, subject: subject || '(no subject)', message })

    // Send email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: parseInt(process.env.SMTP_PORT || '465') === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      await transporter.sendMail({
        from: `"Portfolio" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        replyTo: email,
        subject: `[Portfolio] ${subject || 'New message'} — from ${name}`,
        html: `<div style="font-family:monospace;background:#07080A;color:#E8E9EC;padding:32px;max-width:600px">
          <h2 style="color:#FF4D00">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${subject || '(none)'}</p>
          <hr style="border-color:#1E2028;margin:16px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>`,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact error:', err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
