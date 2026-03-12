import { router } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Index({ users, roles }) {

    const changeRole = (userId, role) => {

        router.put(`/users/${userId}/role`, {
            role: role
        });

    };

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
                    marginBottom: 30
                }}>
                    👥 User Management
                </h1>

                <div style={{

                    background: "white",
                    borderRadius: 10,
                    padding: 25,
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"

                }}>

                    {users.map(user => (

                        <div
                            key={user.id}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "12px 0",
                                borderBottom: "1px solid #eee"
                            }}
                        >

                            <div>

                                <strong>{user.name}</strong>

                                <div style={{
                                    fontSize: 13,
                                    color: "#6b7280"
                                }}>
                                    {user.email}
                                </div>

                            </div>

                            <div>

                                <select
                                    value={user.roles?.[0]?.name || ""}
                                    onChange={(e) => changeRole(user.id, e.target.value)}
                                    style={{
                                        padding: "6px 10px",
                                        borderRadius: 6,
                                        border: "1px solid #ddd",
                                        background: "#f9fafb"
                                    }}
                                >

                                    {roles.map(role => (

                                        <option
                                            key={role.id}
                                            value={role.name}
                                        >

                                            {role.name}

                                        </option>

                                    ))}

                                </select>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </AppLayout>

    );

}

const thStyle = {
    textAlign:"left",
    padding:"12px 16px",
    fontSize:14
}

const tdStyle = {
    padding:"12px 16px",
    fontSize:14
}