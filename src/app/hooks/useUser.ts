import {useQuery} from "@tanstack/react-query";
import {User} from "@/app/hooks/useUserMutations";
import {fetchUser} from "@/app/store/Users/fetchUser";

export const useUser = (id: string) => {
    return useQuery<User>({
        queryKey: ['user', id],
        queryFn: () => fetchUser(id),
        staleTime: 1000 * 60 * 5, // 5 минут кеша
    });
};
