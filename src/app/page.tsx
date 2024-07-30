'use client'
import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [content, setContent] = useState<string>('');
  const sendtext = text 

  const getAzData = async () => {
    
    try {
      console.log('start',sendtext);
      const response = await fetch(`http://localhost:3000/api/azopenai?message=${encodeURIComponent(sendtext)}`);
      if (response.status !== 200) throw new Error('Failed to fetch tasks');
        const data = await response.json();
        console.log('途中 data : ', data);
        setContent(data[0].message.content); 
        console.log("終わり");  
    } catch (err) {
        console.log('🚀 ~ file: index.tsx:32 ~ getAzData ~ err:', err);
    }
    
  };

  return (
    <div>
      <h1 className="center">Chat JOSHO AI</h1>
      <Link href={"/Login"} className="login">Go to Login</Link>
      <div className="div">
        <input
          type="text"
          onChange={(e) => ( setText(e.target.value) )}
          className="input"
          placeholder="聞きたいことを入力してください" required>
        </input>
        <button className="submit">送信</button>
      </div>
      <div className="ai">
      <p className="answer">お答えします</p>
      </div>
    </div>
  );
}
//送信ボタン装飾。loginのリンク付近の装飾、login画面の装飾