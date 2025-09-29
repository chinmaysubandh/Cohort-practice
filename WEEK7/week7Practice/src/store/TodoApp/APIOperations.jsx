import axios from "axios";
import { createContext } from "react";
import { atom } from "recoil";
//global axios fetch
export const TodoAppContext = atom({
    key: "TodoAppContext",
    default: false
})
const api = axios.create({
    baseURL: 'https://679a55e3747b09cdccce8867.mockapi.io'
})

export const getTodoData = () => {
    return api.get('/Todo')
}


export const deleteTodoData = (id) => {
    return api.delete(`/Todo/${id}`)
}

export const PostTodoData = (TodoPost) => {
    return api.post('/Todo', TodoPost)
}
export const PutTodoData = (id) => {
    return api.put(`/Todo/${id}`)
}