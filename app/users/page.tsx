"use client"

import React, { useState } from 'react'
import { User } from '@prisma/client';

const Page = () => {
    const [users, setUsers] = useState([]);

    const handleGetUsers = async () => {
        const res = await fetch('http://localhost:3000/api/user')
        const users = await res.json();

        if (users) setUsers(users)
    }

    const handleCreateUsers = async () => {
        const res = await fetch('http://localhost:3000/api/user', { method: 'post' })
        const users = await res.json();

        if (users) setUsers(users)
    }

    return (
        <div className='flex gap-4 max-w-screen-sm mx-auto mt-24'>
            <div className="grow p-2">
                <h1 className='mb-5 font-bold uppercase'>actions</h1>
                <div className="flex flex-col gap-4">
                    <button className='border' onClick={handleGetUsers}>get users</button>
                    <button className='border' onClick={handleCreateUsers}>create users</button>
                </div>
            </div>
            <div className="grow border p-2">
                <ul>
                    {users ? users.map((el: User) => <li key={el.id}>{el.username}</li>) : <p>no users</p>}
                </ul>
            </div>
        </div>
    )
}

export default Page