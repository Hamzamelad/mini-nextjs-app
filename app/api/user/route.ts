import { NextResponse, NextRequest } from "next/server";
import db from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}



// export async function GET(
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {

//     res.status(200).json({ message: 'Hello from Next.js!' })

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

// }

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