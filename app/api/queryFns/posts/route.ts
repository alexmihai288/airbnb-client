import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const posts = await db.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse("Internal Error");
  }
}
