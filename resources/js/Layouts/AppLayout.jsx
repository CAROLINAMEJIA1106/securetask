import { Link, usePage } from "@inertiajs/react";

export default function AppLayout({ children }) {

    const { auth } = usePage().props;
    const role = auth.user.roles?.[0];

    return (

        <div style={{
            display:"flex",
            minHeight:"100vh",
            fontFamily:"Inter, Arial"
        }}>

            {/* SIDEBAR */}

            <div style={{
                width:220,
                background:"#1e293b",
                color:"white",
                padding:20
            }}>

                <h2 style={{marginBottom:30}}>
                    🚀 SecureTask
                </h2>

                <div style={{display:"flex", flexDirection:"column", gap:10}}>

                    <Link
                        href="/dashboard"
                        style={menuStyle}
                    >
                        📊 Dashboard
                    </Link>

                    <Link
                        href="/tasks"
                        style={menuStyle}
                    >
                        📋 Tasks
                    </Link>

                    {role === "Administrador" && (

                        <Link
                            href="/users"
                            style={menuStyle}
                        >
                            👥 Users
                        </Link>

                    )}

                </div>

            </div>


            {/* MAIN CONTENT */}

            <div style={{
                flex:1,
                background:"#f6f8fb"
            }}>

                {/* HEADER */}

                <div style={{
                    height:60,
                    background:"white",
                    borderBottom:"1px solid #e5e7eb",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    padding:"0 20px"
                }}>

                    <span>
                        Welcome {auth.user.name}
                    </span>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        style={{
                            background:"#ef4444",
                            color:"white",
                            border:"none",
                            padding:"6px 12px",
                            borderRadius:6,
                            cursor:"pointer"
                        }}
                    >
                        Logout
                    </Link>

                </div>

                {/* PAGE */}

                <div style={{padding:30}}>

                    {children}

                </div>

            </div>

        </div>

    )
}

const menuStyle = {
    color:"white",
    textDecoration:"none",
    padding:"8px 10px",
    borderRadius:6
};