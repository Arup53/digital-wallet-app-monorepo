"use client"

import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import React from 'react'
import gsap from "gsap";
const adArray = [
  { title: "Flight", img: "./img/download.svg" },
  { title: "Bus", img: "./img/bus.svg" },
  { title: "Train", img: "./img/train.svg" },

];

const InvestSection = () => {


  useGSAP(()=>{


    const staggerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#stagger",
        start:"top center",
        end: "bottom bottom",
        scrub: 1.5,
        pin: true,
        markers:true
      },
    });

    staggerTimeline.from('.box',{y:200, opacity:0, stagger:0.5,ease: "sine.out", } )



  },[])

  return (
        <section className="flex flex-col justify-center items-center my-24 py-24 space-y-4  ">

      <div id='stagger' className="flex-center  gap-6">
         <div className='box flex flex-col w-[400px] h-[400px] justify-center items-center rounded-2xl shadow-lg text-black space-y-6'>
           <div className="h-[150px] flex items-center justify-center">
  <Image src="./img/g1.svg" alt="" width={150} height={150}/>
</div>
           <p className='text-3xl text-left font-bold'>
              Investment
           </p>
           <p className=' text-base'>Build, manage & grow your wealth</p>
         </div>
         <div className='box flex flex-col w-[400px] h-[400px] justify-center items-center rounded-2xl shadow-lg text-black space-y-6'>
           <div className="h-[150px] flex items-center justify-center">
  <Image src="./img/g2.svg" alt="" width={150} height={150}/>
</div>
           <p className='text-3xl text-left font-bold'>
              Insurance
           </p>
           <p className='text-base'>Protect, plan & secure your future</p>
         </div>
         <div className='box flex flex-col w-[400px] h-[400px] justify-center items-center rounded-2xl shadow-lg text-black space-y-6'>
           <div className="h-[150px] flex items-center justify-center">
  <Image src="./img/g3.svg" alt="" width={150} height={150}/>
</div>
           <p className='text-3xl text-left font-bold'>
              Lending
           </p>
           <p className='text-base'>Access quick, transparent & secure loans</p>
         </div>
      </div>
    </section>
  )
}

export default InvestSection