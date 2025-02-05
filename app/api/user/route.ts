import { NextResponse, NextRequest } from "next/server";
import db from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}

export async function GET() {
    try {
        const users = await db.user.findMany();

        return Response.json(users)
    } catch (error) {
        return Response.json(error)
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