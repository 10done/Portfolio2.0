
import { incrementView, getViews } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const slug = "portfolio-home";
        console.log("[Visitors API] GET request for:", slug);
        const views = await getViews(slug);
        console.log("[Visitors API] GET success, views:", views);
        return NextResponse.json({ views });
    } catch (error) {
        console.error("[Visitors API] GET error:", error);
        return NextResponse.json(
            { error: "Failed to fetch views" },
            { status: 500 }
        );
    }
}

export async function POST() {
    try {
        const slug = "portfolio-home";
        console.log("[Visitors API] POST request for:", slug);
        const views = await incrementView(slug);
        console.log("[Visitors API] POST success, views:", views);
        return NextResponse.json({ views });
    } catch (error) {
        console.error("[Visitors API] POST error:", error);
        return NextResponse.json(
            { error: "Failed to increment views" },
            { status: 500 }
        );
    }
}

