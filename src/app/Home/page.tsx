'use client'
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function Home() {
  return (
    <div>
      <p className="center">Chat JOSHO AI</p>
      <Link href={"/Login"} className="login">Go to Login</Link>
      </div>
  );
}