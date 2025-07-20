"use client";

import { useStore } from "@repo/store";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function Home() {
  const store = useStore((state) => state.balance);
  const { data: session } = useSession();
  console.log(session);
  return <div className=""></div>;
}
