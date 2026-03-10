import React from "react"
import { Link } from "@inertiajs/react"

export default function Index({ tasks }) {

    return (
        <div style={{padding:40}}>

            <h1>Lista de Tasks</h1>

            <Link href="/tasks/create">
                Crear Task
            </Link>

            {tasks.map(task => (
                <div key={task.id} style={{border:'1px solid #ccc', margin:10, padding:10}}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}

        </div>
    )

}