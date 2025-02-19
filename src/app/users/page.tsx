'use client';


import UserList from "@/app/components/UserList";
import {useUsers} from "@/app/hooks/useUsers";

const UsersPage = () => {
    const {data = [], isLoading, error} = useUsers();


    if (isLoading) {
        return <p>Загрузка пользователей...</p>
    }
    if (error) {
        return <p>Ошибка: {error.message}</p>
    }
    return (
        <div>
            <UserList data={data}/>
        </div>
    );
};

export default UsersPage;
