import { Link, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Create(){

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: ""
    });

    function submit(e){
        e.preventDefault();
        post("/tasks");
    }

    return (

        <AppLayout>

            <div style={{
                padding:40,
                fontFamily:"Inter, Arial",
                background:"#f6f8fb",
                minHeight:"100vh"
            }}>

                <h1 style={{
                    fontSize:28,
                    marginBottom:20
                }}>
                    ➕ Create New Task
                </h1>

                <div style={{marginBottom:20}}>
                    <Link
                        href="/tasks"
                        style={{
                            textDecoration:"none",
                            color:"#2563eb"
                        }}
                    >
                        ← Back to Tasks
                    </Link>
                </div>

                <div style={{
                    background:"white",
                    padding:25,
                    borderRadius:10,
                    border:"1px solid #e5e7eb",
                    boxShadow:"0 2px 4px rgba(0,0,0,0.05)",
                    maxWidth:500
                }}>

                    <form onSubmit={submit}>

                        <div style={{marginBottom:15}}>

                            <label style={{
                                display:"block",
                                marginBottom:6,
                                fontWeight:500
                            }}>
                                Title
                            </label>

                            <input
                                type="text"
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                                style={{
                                    width:"100%",
                                    padding:"8px",
                                    borderRadius:6,
                                    border:"1px solid #ddd"
                                }}
                            />

                            {errors.title && (
                                <div style={{color:"red", fontSize:12}}>
                                    {errors.title}
                                </div>
                            )}

                        </div>


                        <div style={{marginBottom:20}}>

                            <label style={{
                                display:"block",
                                marginBottom:6,
                                fontWeight:500
                            }}>
                                Description
                            </label>

                            <textarea
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                style={{
                                    width:"100%",
                                    padding:"8px",
                                    borderRadius:6,
                                    border:"1px solid #ddd",
                                    minHeight:80
                                }}
                            />

                        </div>


                        <button
                            type="submit"
                            disabled={processing}
                            style={{
                                background:"#2563eb",
                                color:"white",
                                padding:"10px 16px",
                                borderRadius:6,
                                border:"none",
                                cursor:"pointer"
                            }}
                        >
                            Save Task
                        </button>

                    </form>

                </div>

            </div>

        </AppLayout>

    );

}