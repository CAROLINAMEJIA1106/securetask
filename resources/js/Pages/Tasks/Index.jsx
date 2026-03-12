import { Link, router, usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ tasks }) {

    const { auth } = usePage().props;
    const role = auth.user.roles?.[0];
    const getStatusStyle = (status) => {

        if(status === "completed"){
            return {
                background:"#22c55e",
                color:"white"
            }
        }

        if(status === "cancelled"){
            return {
                background:"#ef4444",
                color:"white"
            }
        }

        return {
            background:"#facc15",
            color:"#333"
        }
    }

    return (

        <AppLayout>

            <div style={{
                padding: 40,
                fontFamily: "Inter, Arial",
                background: "#f6f8fb",
                minHeight: "100vh"
            }}>

                <h1 style={{
                    fontSize: 28,
                    marginBottom: 20
                }}>
                    📋 Task Manager
                </h1>


                {(role === "Administrador" || role === "Editor") && (

                    <Link
                        href="/tasks/create"
                        style={{
                            padding: "10px 16px",
                            background: "#2563eb",
                            color: "white",
                            borderRadius: 6,
                            textDecoration: "none"
                        }}
                    >
                        + New Task
                    </Link>

                )}


                <div style={{ marginTop: 30 }}>

                    {tasks.length === 0 && (

                        <p>No tasks yet.</p>

                    )}


                    {tasks.map(task => (

                        <div
                            key={task.id}
                            style={{
                                background: "white",
                                padding: 20,
                                borderRadius: 12,
                                marginBottom: 18,
                                border: "1px solid #e5e7eb",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                                transition: "all 0.2s ease"
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.08)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "none";
                                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                            }}
                        >

                            {/* TITLE */}

                            <h3 style={{
                                marginBottom: 8,
                                fontSize: 18
                            }}>
                                📝 {task.title}
                            </h3>


                            {/* DESCRIPTION */}

                            <p style={{
                                marginBottom: 12,
                                color: "#374151"
                            }}>
                                {task.description}
                            </p>


                            {/* META INFO */}

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                marginBottom: 12
                            }}>

                                <span style={{
                                    fontSize: 13,
                                    color: "#6b7280"
                                }}>
                                    👤 {task.user?.name}
                                </span>


                                <span style={{
                                    ...getStatusStyle(task.status),
                                    padding: "4px 10px",
                                    borderRadius: 6,
                                    fontSize: 12,
                                    fontWeight: 500
                                }}>
                                    {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                                </span>

                            </div>


                            {/* ACTIONS */}

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10
                            }}>

                                <Link
                                    href={`/tasks/${task.id}`}
                                    style={{
                                        color: "#2563eb",
                                        textDecoration: "none",
                                        fontWeight: 500
                                    }}
                                >
                                    View
                                </Link>


                                {(role === "Administrador" || role === "Editor") && (

                                    <>

                                        <Link
                                            href={`/tasks/${task.id}/edit`}
                                            style={{
                                                background: "#f97316",
                                                color: "white",
                                                padding: "5px 10px",
                                                borderRadius: 6,
                                                textDecoration: "none"
                                            }}
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => {
                                                if (confirm("Delete task?")) {
                                                    router.delete(`/tasks/${task.id}`);
                                                }
                                            }}
                                            style={{
                                                background: "#ef4444",
                                                color: "white",
                                                border: "none",
                                                padding: "5px 10px",
                                                borderRadius: 6,
                                                cursor: "pointer"
                                            }}
                                        >
                                            Delete
                                        </button>

                                    </>

                                )}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </AppLayout>

    )

}