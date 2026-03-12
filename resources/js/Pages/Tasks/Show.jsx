import { Link } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Show({ task }) {

    const getStatusStyle = (status) => {

        if(status === "completed"){
            return { background:"#22c55e", color:"white" }
        }

        if(status === "cancelled"){
            return { background:"#ef4444", color:"white" }
        }

        return { background:"#facc15", color:"#333" }

    }

    return (

        <AppLayout>

            <div style={{
                maxWidth:700,
                margin:"auto",
                background:"white",
                padding:30,
                borderRadius:12,
                boxShadow:"0 4px 10px rgba(0,0,0,0.05)"
            }}>

                <h1 style={{marginBottom:20}}>
                    📝 Task Details
                </h1>

                <h2 style={{fontSize:22, marginBottom:10}}>
                    {task.title}
                </h2>

                <p style={{
                    marginBottom:20,
                    color:"#374151"
                }}>
                    {task.description}
                </p>

                <p style={{
                    fontSize:13,
                    color:"#6b7280",
                    marginBottom:10
                }}>
                    👤 Created by: {task.user?.name} ({task.user?.roles?.[0]?.name})
                </p>

                <span style={{
                    ...getStatusStyle(task.status),
                    padding:"5px 12px",
                    borderRadius:6,
                    fontSize:13,
                    fontWeight:500
                }}>
                    {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>

                <div style={{marginTop:25}}>

                    <Link
                        href="/tasks"
                        style={{
                            background:"#2563eb",
                            color:"white",
                            padding:"8px 14px",
                            borderRadius:6,
                            textDecoration:"none"
                        }}
                    >
                        ← Back to tasks
                    </Link>

                </div>

            </div>

        </AppLayout>

    )

}