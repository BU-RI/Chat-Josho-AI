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
    <div>
        <p>Login</p>
        <Link href={"/Home"}>back to Home</Link>
        <Link href={"/createuser"}>create user</Link>
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

