import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '821a46e2-87b6-46a2-b041-c74d536e1243'
    }
})

export const usersAPI = {
    getUsers(pageNumber = 1 , pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    auth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}