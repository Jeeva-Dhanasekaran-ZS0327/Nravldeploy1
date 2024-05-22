"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Login from "./components/login/Login";
import { redirect } from 'next/navigation'
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect('/login')
  }, []);
  return <main></main>;
}
