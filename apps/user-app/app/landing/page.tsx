"use client"

import AdSection from "../../components/landing/AdSection"
import Art from "../../components/landing/Art"
import Footer from "../../components/landing/Footer"
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
     <AdSection />
     <Footer/>
    </div>
  )
}

export default page