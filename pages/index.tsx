import Link from "next/link"


const Home = () => {
    return (
        <div>

            
            <h1>Home</h1>
            <Link href="/dashboard">
                <a>Dashboard</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
            <Link href="/register">
                <a>Register</a>
            </Link>
        </div>
    )
}


export default Home
