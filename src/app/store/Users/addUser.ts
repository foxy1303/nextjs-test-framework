import {User} from "@/app/hooks/useUserMutations";

export const addUser = async (newUser: Omit<User, 'id'>): Promise<User> => {
    const res = await fetch('https://67b5b54e07ba6e59083e1ad7.mockapi.io/api/next-js-test/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
    });

    if (!res.ok) throw new Error('Ошибка при добавлении пользователя');
    return res.json();
};
