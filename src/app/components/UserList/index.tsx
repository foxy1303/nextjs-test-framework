'use client';

import Image from 'next/image';
import {User, useUserMutations} from "@/app/hooks/useUserMutations";
import {useRouter} from "next/navigation";

interface UserListProps {
    data: User[];
}

export default function UserList({data}: UserListProps) {
    const {addUserMutation, deleteUserMutation} = useUserMutations();
    const router = useRouter();
    return (
        <div>
            <button
                className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
                onClick={() =>
                    addUserMutation.mutate({
                        name: 'Новый пользователь',
                        avatar: 'https://via.placeholder.com/50',
                        createdAt: new Date().toISOString()
                    })
                }
            >
                Добавить пользователя
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((user) => (
                    <div key={user.id} className="border p-4 rounded-lg shadow-md flex items-center gap-4">
                        <Image src={user.avatar} alt={user.name} width={50} height={50} className="rounded-full"/>
                        <div>
                            <h2 className="text-lg font-semibold">{user.name}</h2>
                            <p>ID: {user.id}</p>
                            <button
                                className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
                                onClick={() => router.push('/users/' + user.id)}
                            >
                                Перейти к данным
                            </button>
                            <button
                                className="mt-2 ml-2 bg-red-500 text-white px-2 py-1 rounded"
                                onClick={() => deleteUserMutation.mutate(user.id)}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
