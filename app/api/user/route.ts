import { NextResponse, NextRequest } from "next/server";
import db from "@/lib/db";


export async function GET(request: NextRequest) {
    try {
        const users = await db.user.findMany();

        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(request: NextRequest) {

    const dummyUsers = [
        { username: 'john', email: 'john@g.com' },
        { username: 'mark', email: 'mark@g.com' },
        { username: 'jemmy', email: 'jemmy@g.com' }
    ]

    try {
        const users = await db.user.createManyAndReturn({ data: dummyUsers });

        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(error)
    }

}