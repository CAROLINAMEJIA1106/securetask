import AppLayout from "@/Layouts/AppLayout";
import { usePage } from "@inertiajs/react";

export default function Dashboard(){

    const { stats, auth } = usePage().props;
    const role = auth.user.roles?.[0];

    return(

        <AppLayout>

            <h1 style={{
                fontSize:28,
                marginBottom:25
            }}>
                📊 Dashboard
            </h1>


            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fit, minmax(220px,1fr))",
                gap:20
            }}>


                {/* TOTAL TASKS */}

                <div style={cardStyle("#2563eb")}>
                    <h3>📋 Tasks</h3>
                    <p style={numberStyle}>
                        {stats.tasks}
                    </p>
                </div>


                {/* PENDING */}

                <div style={cardStyle("#facc15")}>
                    <h3>🟡 Pending</h3>
                    <p style={numberStyle}>
                        {stats.pending}
                    </p>
                </div>


                {/* COMPLETED */}

                <div style={cardStyle("#22c55e")}>
                    <h3>🟢 Completed</h3>
                    <p style={numberStyle}>
                        {stats.completed}
                    </p>
                </div>


                {/* USERS */}

                {role === "Administrador" && (

                    <div style={cardStyle("#f97316")}>
                        <h3>👥 Users</h3>
                        <p style={numberStyle}>
                            {stats.users}
                        </p>
                    </div>

                )}

            </div>

        </AppLayout>

    )

}

const cardStyle = (color) => ({
    background:"white",
    borderRadius:12,
    padding:25,
    borderLeft:`6px solid ${color}`,
    boxShadow:"0 4px 10px rgba(0,0,0,0.05)"
})

const numberStyle = {
    fontSize:30,
    marginTop:10,
    fontWeight:600
}