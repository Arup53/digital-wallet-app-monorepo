"use client";

import { useStore } from "@repo/store";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
export default function Home() {
  const store = useStore((state) => state.balance);
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="text-red-900">
      {" "}
      <>
        <div className="flex justify-center items-center z-40">
          <div className=" flex justify-between items-center">
            {session ? (
              <button onClick={() => signOut()}>SignOut</button>
            ) : (
              <button onClick={() => signIn()}>login</button>
            )}
          </div>
        </div>
      </>
    </div>
  );
}
