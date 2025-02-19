'use client';

import {useState, useEffect} from 'react';
import {useUser} from "@/app/hooks/useUser";
import {useUserMutations} from "@/app/hooks/useUserMutations";
import {useParams, useRouter} from "next/navigation";

const UserCard = () => {
    const params = useParams<{ id: string }>();
    const router = useRouter();
    const {id = ''} = params;
    const {data, isLoading, error} = useUser(params.id);
    const {updateUserMutation} = useUserMutations();

    const [name, setName] = useState<string>('');

    useEffect(() => {
        if (data) {
            setName(data.name);
        }
    }, [data]);

    const handleSubmit = () => {
        if (name) {
            updateUserMutation.mutate({id, updatedData: {name: name}}, {
                onSuccess: () => {
                    router.replace('/users');
                }
            });
        }
    }

    if (isLoading) {
        return <p>Загрузка...</p>;
    }
    if (error) {
        return <p>Ошибка: {error.message}</p>;
    }
    return (
        <div className="border p-4 rounded-lg shadow-md flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex flex-col items-center">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 p-2 border rounded"
                    placeholder="Имя"
                />
            </div>
            <button
                onClick={handleSubmit}
                className="mt-4 p-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
            >
                Сохранить
            </button>
            {updateUserMutation.isError && (
                <p className="text-red-500 mt-2">Ошибка при обновлении данных.</p>
            )}
        </div>
    );
}
export default UserCard;
