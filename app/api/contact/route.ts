import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "anubhavtandon6424@gmail.com",
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json(
            { success: true, message: "Message sent!" },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
