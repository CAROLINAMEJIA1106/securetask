import { useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Edit({ task }) {

    const { data, setData, put, processing, errors } = useForm({
        title: task.title,
        description: task.description || "",
        status: task.status || "pending"
    });

    function submit(e){
        e.preventDefault();

        put(`/tasks/${task.id}`);
    }

    return(

        <AppLayout>

            <div style={{
                maxWidth:500,
                margin:"auto",
                background:"white",
                padding:30,
                borderRadius:10,
                boxShadow:"0 2px 4px rgba(0,0,0,0.05)"
            }}>

                <h1 style={{marginBottom:20}}>
                    ✏️ Edit Task
                </h1>

                <form onSubmit={submit}>

                    <div style={{marginBottom:15}}>

                        <label>Title</label>

                        <input
                            type="text"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            style={{
                                width:"100%",
                                padding:8,
                                marginTop:5,
                                border:"1px solid #ccc",
                                borderRadius:6
                            }}
                        />

                    </div>


                    <div style={{marginBottom:15}}>

                        <label>Description</label>

                        <textarea
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            style={{
                                width:"100%",
                                padding:8,
                                marginTop:5,
                                border:"1px solid #ccc",
                                borderRadius:6
                            }}
                        />

                    </div>


                    {/* SELECT STATUS */}

                    <div style={{marginBottom:20}}>

                        <label>Status</label>

                        <select
                            value={data.status}
                            onChange={e => setData('status', e.target.value)}
                            style={{
                                width:"100%",
                                padding:8,
                                marginTop:5,
                                border:"1px solid #ccc",
                                borderRadius:6
                            }}
                        >

                            <option value="pending">
                                Pending
                            </option>

                            <option value="completed">
                                Completed
                            </option>

                            <option value="cancelled">
                                Cancelled
                            </option>

                        </select>

                    </div>


                    <button
                        type="submit"
                        disabled={processing}
                        style={{
                            background:"#2563eb",
                            color:"white",
                            padding:"8px 14px",
                            border:"none",
                            borderRadius:6,
                            cursor:"pointer"
                        }}
                    >
                        Update Task
                    </button>

                </form>

            </div>

        </AppLayout>

    )

}