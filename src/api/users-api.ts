import {GetItemsType, instance} from "./api"

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
    }
}