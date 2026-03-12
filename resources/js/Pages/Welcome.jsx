import { Head, Link } from '@inertiajs/react';
import bg from "@/assets/images/secure-bg.jpg";

export default function Welcome({ auth }) {

    return (
        <>
            <Head title="SecureTask" />

            <div
                style={{
                    minHeight: "100vh",
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    fontFamily: "Inter, Arial"
                }}
            >

                {/* Overlay oscuro */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.55)"
                    }}
                />

                {/* Contenido */}

                <div
                    style={{
                        position: "relative",
                        textAlign: "center",
                        color: "white"
                    }}
                >

                    <h1
                        style={{
                            fontSize: 48,
                            marginBottom: 20,
                            fontWeight: "bold"
                        }}
                    >
                        🔐 SecureTask
                    </h1>

                    <p
                        style={{
                            fontSize: 20,
                            marginBottom: 30
                        }}
                    >
                        Secure Task Management Platform
                    </p>

                    {auth?.user ? (

                        <Link
                            href="/dashboard"
                            style={{
                                background:"#2563eb",
                                padding:"12px 20px",
                                borderRadius:6,
                                color:"white",
                                textDecoration:"none",
                                fontSize:16
                            }}
                        >
                            Go to Dashboard
                        </Link>

                    ) : (

                        <div>

                            <Link
                                href="/login"
                                style={{
                                    background:"#2563eb",
                                    padding:"10px 18px",
                                    borderRadius:6,
                                    marginRight:12,
                                    color:"white",
                                    textDecoration:"none"
                                }}
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                style={{
                                    background:"#f97316",
                                    padding:"10px 18px",
                                    borderRadius:6,
                                    color:"white",
                                    textDecoration:"none"
                                }}
                            >
                                Register
                            </Link>

                        </div>

                    )}

                </div>

            </div>

        </>
    );
}