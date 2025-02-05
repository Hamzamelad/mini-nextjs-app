import { NextResponse, NextRequest } from "next/server";
import db from "@/lib/db";
import { User } from "@prisma/client";


export async function GET(request: NextRequest) {
    const users = await db.user.findMany();

    if (users) return NextResponse.json(users)

    return NextResponse.json({ error: 'Something webt wrong!' })
}

export async function POST(request: NextRequest) {

    const dummyUsers = [
        { username: 'john', email: 'john@g.com' },
        { username: 'mark', email: 'mark@g.com' },
        { username: 'jemmy', email: 'jemmy@g.com' }
    ]
    const users = await db.user.createManyAndReturn({ data: dummyUsers });

    if (users) return NextResponse.json(users)

    return NextResponse.json({ error: 'Something webt wrong!' })

}