import { auth } from "@/auth";
import { db } from "@/lib/db";
import { CreateApiData } from "@/types/api";
import { nanoid } from "nanoid";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized to perform this action", createdApiKey: null },
        { status: 401 }
      );
    }
    // const { user } = session;
    const user = await db.user.findFirst({
      where: { email: session.user.email },
    });
    if (!user) {
      return NextResponse.json(
        { error: "User not found", createdApiKey: null },
        { status: 404 }
      );
    }
    const existingApiKey = await db.apiKey.findFirst({
      where: { userId: user.id, enabled: true },
    });
    if (existingApiKey) {
      return NextResponse.json(
        { error: "You already have valid API key", createdApiKey: null },
        { status: 400 }
      );
    }
    const createdApiKey = await db.apiKey.create({
      data: {
        userId: user.id,
        key: nanoid(),
      },
    });
    return NextResponse.json({
      error: null,
      createdApiKey,
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: err.issues,
          createdApiKey: null,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        error: "Internal Server Error",
        createdApiKey: null,
      },
      { status: 500 }
    );
  }
}
