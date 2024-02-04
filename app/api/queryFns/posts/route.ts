import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const profile = await currentUser();
    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    const posts = await db.post.findMany();

    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse("Internal Error");
  }
}
