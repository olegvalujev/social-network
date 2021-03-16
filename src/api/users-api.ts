import {APIResponseType, GetItemsType, instance} from "./api"
import {FilterType} from "../redux/users-reducer";

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10, filter: FilterType) {
        console.log(filter)
        return instance.get<GetItemsType>(`users?page=${pageNumber}&count=${pageSize}`
            +(filter.term === '' ? '': `&term=${filter.term}`)
            +(filter.friend === null? '': `&friend=${filter.friend}`)).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>
    }
}