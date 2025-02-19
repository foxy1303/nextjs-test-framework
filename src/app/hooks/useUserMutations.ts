import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addUser} from "@/app/store/Users/addUser";
import {updateUser} from '../store/Users/updateUser';
import {deleteUser} from "@/app/store/Users/deleteUser";


export interface User {
    id: string;
    name: string;
    avatar: string;
    createdAt: string;
}

export const useUserMutations = () => {
    const queryClient = useQueryClient();

    const addUserMutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']}); // Обновление кеша после добавления
        },
    });

    const updateUserMutation = useMutation({
        mutationFn: ({id, updatedData}: { id: string; updatedData: Partial<User> }) =>
            updateUser(id, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']}); // Обновление кеша после редактирования
        },
    });

    const deleteUserMutation = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']}); // Обновление кеша после удаления
        },
    });

    return {addUserMutation, updateUserMutation, deleteUserMutation};
};
