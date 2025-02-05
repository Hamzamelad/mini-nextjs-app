// 1
import db from "@/lib/db";

export async function GET() {

    // 2
    try {
        await db.$connect();
        return Response.json({ success: '✅ Connected to the database successfully!' })
    } catch (error) {
        return Response.json({ '❌ Failed to connect': error })
    } finally {
        await db.$disconnect();
    }

    return Response.json({ message: 'success' })
}