import React from "react"
import { useForm } from "@inertiajs/react"

export default function Create(){

    const { data, setData, post } = useForm({
        title: "",
        description: ""
    })

    function submit(e){
        e.preventDefault()
        post("/tasks")
    }

    return (

        <div style={{padding:40}}>

            <h1>Crear Task</h1>

            <form onSubmit={submit}>

                <div>
                    <label>Título</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                    />
                </div>

                <div>
                    <label>Descripción</label>
                    <textarea
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                    />
                </div>

                <button type="submit">
                    Guardar
                </button>

            </form>

        </div>

    )

}