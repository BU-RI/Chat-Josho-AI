'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value)
// }

function Login() {
    const [ value, setValue ] = useState("")
    return (
    <div className="contena">
        <p>Login</p>
        <Link href={"/"} className="back">back to Home</Link>
        <Link href={"/createuser"} className="create">create user</Link>
        <input
        type="text"
        onChange={(e) => ( setValue(e.target.value) )}
        >
        </input>
        <p>{value}</p>
    </div>
    )
}
export default Login;

