import {User} from "@/app/hooks/useUserMutations";

export const updateUser = async (id: string, updatedData: Partial<User>): Promise<User> => {
    const res = await fetch(`https://67b5b54e07ba6e59083e1ad7.mockapi.io/api/next-js-test/users/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedData),
    });

    if (!res.ok) throw new Error('Ошибка при обновлении пользователя');
    return res.json();
};
