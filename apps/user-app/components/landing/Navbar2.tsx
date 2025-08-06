"use client"

import { Button } from "@repo/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

import { useRouter } from "next/navigation";



const Navbar2 = () => {

    const session = useSession();
  const router = useRouter();

  const onSignout = async ()=> {
  await signOut();
          router.push("/api/auth/signin");}

  return (
    <section className=" top-0 z-50 bg-white fixed text-black shadow-sm w-full">
      <div className="w-[50%] mx-auto flex justify-between items-center py-3 ">
        <p className="text-xl font-medium">xPay</p>

        <div className="flex text-sm items-center gap-6">
          
          <Button onClick={session.data?.user ? onSignout : signIn}>
          {session.data?.user ? "Logout" : "Login"}
        </Button>
          
          <Link href={'/dashboard'}>Dashboard</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar2;
