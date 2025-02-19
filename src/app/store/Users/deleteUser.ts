export const deleteUser = async (id: string): Promise<void> => {
    const res = await fetch(`https://67b5b54e07ba6e59083e1ad7.mockapi.io/api/next-js-test/users/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) throw new Error('Ошибка при удалении пользователя');
};
