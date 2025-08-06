"use client"

import AdSection from "../../components/landing/AdSection"
import Art from "../../components/landing/Art"
import Footer from "../../components/landing/Footer"
import Hero from "../../components/landing/Hero"
import InvestSection from "../../components/landing/InvestSection"

import Navbar2 from "../../components/landing/Navbar2"

import SubHero from "../../components/landing/SubHero"
import TickerSection from "../../components/landing/TickerSection"


const page = () => {
  return (
    <div>   
     <Hero/>
     <SubHero/>
     <InvestSection/>
     <TickerSection/>
     <AdSection />
     <Footer/>
    </div>
  )
}

export default page