import { ITask } from "./types/tasks";

const baseUrl = 'https://jsonplaceholder.typicode.com/users/1/';

export const getAllTodos = async (): Promise<ITask[]> => {    
    const res = await fetch(`${baseUrl}/todos`);
    const data = await res.json();
    return data;
}