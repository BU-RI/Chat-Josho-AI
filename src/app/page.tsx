'use client'
import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1 className="center">Chat JOSHO AI</h1>
      <Link href={"/Login"} className="login">Go to Login</Link>
      <div className="div">
        <input
          type="text"
          onChange={(e) => ( setText(e.target.value) )}
          className="input"
        >
        </input>
        <button className="button">送信</button>
      </div>
      <div className="ai">
      </div>
    </div>
  );
}
