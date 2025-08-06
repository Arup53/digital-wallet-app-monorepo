"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".iconText", {
      x: 10,
      duration: 1,
      delay: 0.5,
      ease: "bounce.out",
    });

    gsap.from(".img-hero", {
      y: 100,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <div className="relative h-[100vh] bg-[url('/img/gradientHero.png')] bg-cover bg-no-repeat flex-center overflow-hidden text-white ">
      <div className="flex absolute gap-2 top-[20%]  border-amber-300">
        <Image
          src="./img/icons8-x-32.svg"
          width={24}
          height={24}
          alt=""
          className="invert brightness-0"
        />
        <h3 className="text-4xl iconText">Pay</h3>
      </div>
      <div className="flex absolute gap-2 top-[30%]  border-amber-300">
        <h3 className="text-8xl">
          Pay the
          <Image
            src="./img/icons8-x-96.svg"
            alt=""
            className="invert brightness-0 inline"
            width={96}
            height={96}
          />
          way
        </h3>
      </div>

      <Image
        src="/img/heroMobile.png"
        alt="Mobile"
        className="img-hero absolute -bottom-[90%]  z-0"
        width={600}
        height={600}
      />
    </div>
  )
}

export default Hero;
