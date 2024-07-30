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
    <div className="container">
        <form>
        <p className="fsize">ログイン画面</p>
        <input className="username" type="text" placeholder="Username" />
        <input className="pass" type="password" placeholder="Password" />
        <button className="login2" type="submit">ログイン</button>
      </form>
      <Link href={"/"} className="back">back to Home</Link>
      <Link href={"/createuser"} className="create">create user</Link>
    </div>
    )
}
export default Login;

