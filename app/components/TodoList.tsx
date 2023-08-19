import { ITask } from '@/types/tasks'
import React from 'react'
import Task from './Task'

interface TodoListProps {
    tasks: ITask[]
}
export const TodoList: React.FC<TodoListProps> = ({ tasks }) => (
    <div>
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(tasks) && tasks.map((t) => <Task key={t.id} task={t} />)}
                </tbody>
            </table>
        </div>
    </div>
)
