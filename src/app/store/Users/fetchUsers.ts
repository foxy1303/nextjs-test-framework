import {User} from "@/app/hooks/useUserMutations";

export const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch('https://67b5b54e07ba6e59083e1ad7.mockapi.io/api/next-js-test/users');
    if (!res.ok) throw new Error('Ошибка загрузки пользователей');
    return res.json();
};
