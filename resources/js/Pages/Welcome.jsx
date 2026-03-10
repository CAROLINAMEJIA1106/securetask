import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Inicio" />

            <div style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Arial"
            }}>
                <h1>Bienvenidos a SecureTask</h1>

                {auth?.user ? (
                    <Link href="/dashboard">
                        Ir al Dashboard
                    </Link>
                ) : (
                    <div style={{marginTop:20}}>
                        <Link href="/login" style={{marginRight:20}}>
                            Login
                        </Link>

                        <Link href="/register">
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}