import { NextResponse, NextRequest } from "next/server";
import db from "@/lib/db";

async function testConnection() {
    try {
        await db.$connect();
        return ('✅ Connected to the database successfully!');
    } catch (error) {
        return { '❌ Failed to connect:': error }
    } finally {
        await db.$disconnect();
    }
}


export async function GET(request: NextRequest) {

    return NextResponse.json({success: "api works"})

    // try {
    //     await db.$connect();
    //     return NextResponse.json({ success: '✅ Connected to the database successfully!' })
    // } catch (error) {
    //     return NextResponse.json({ '❌ Failed to connect': error })
    // } finally {
    //     await db.$disconnect();
    // }


//     try {
//         const users = await db.user.findMany();

//         return NextResponse.json(users)
//     } catch (error) {
//         return NextResponse.json(error)
//     }

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