"use server"

import db from "@/lib/db"


export async function getUsers(formData: FormData) {
    const users = await db.user.findMany();

    return { users }
}