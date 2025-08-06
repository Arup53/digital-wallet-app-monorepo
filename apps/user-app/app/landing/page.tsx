"use client"

import Art from "../../components/landing/Art"
import Hero from "../../components/landing/Hero"
import SubHero from "../../components/landing/SubHero"
import TickerSection from "../../components/landing/TickerSection"


const page = () => {
  return (
    <div>
     <Hero/>
     <SubHero/>
     <Art />
     <TickerSection/>
    </div>
  )
}

export default page