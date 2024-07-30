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
      <div className="div">
      <Link href={"/Login"} className="login">＞ Go to Login</Link>
      <form>
        <input
          type="text"
          onChange={(e) => ( setText(e.target.value) )}
          className="input"
          placeholder="聞きたいことを入力してください" required>
        </input>
        <button className="submit" type="submit">⇓</button>
      </form>  
      </div>
      <div className="ai">
      <p className="answer">お答えします</p>
      </div>
    </div>
  );
}
//login画面の装飾