import {useQuery} from '@tanstack/react-query';
import {fetchUsers} from "@/app/store/Users/fetchUsers";
import {User} from "@/app/hooks/useUserMutations";

export const useUsers = () => {
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 1000 * 60 * 5, // 5 минут кеша
    });
};


