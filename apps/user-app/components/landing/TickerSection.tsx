import { useGSAP } from "@gsap/react";
import Curvebox from "./Curvebox";
import SmallCurvebox from "./SmallCurvbox";

import Marquee from "react-fast-marquee";

import { CiMobile3 } from "react-icons/ci";
import { GiSpeedometer } from "react-icons/gi";
import { IoTvOutline, IoWaterOutline } from "react-icons/io5";
import { LuRouter, LuSatelliteDish } from "react-icons/lu";
import { BsCreditCard } from "react-icons/bs";

import { TbDatabaseDollar, TbHomeDollar } from "react-icons/tb";
import { BiBox } from "react-icons/bi";
import { GoShieldCheck } from "react-icons/go";

const colorObj = {
  grey: "#f6f6f6",
  yellow: "#FFDFBA",
  purple: "#DCD6FF",
  pink: "#FFDDE3",
  green: "#E0F5FA",
};

const TickerSection = () => {
  console.log(colorObj.yellow);
  return (
    <div>
      {/* // container-1 */}

      <Marquee>
        <Curvebox text={"Mobile Recharge"} circleColor={colorObj.grey}>
          <CiMobile3 />
        </Curvebox>

        <div className="mx-4 flex-center">
          <div className="w-12 h-12 mx-2 rounded-full bg-teal-400" />

          <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>
        </div>

        <Curvebox text={"Fast Recharge"} circleColor={colorObj.yellow}>
          <GiSpeedometer />
        </Curvebox>
        <Curvebox text={"Cable TV"} circleColor={colorObj.pink}>
          <IoTvOutline />
        </Curvebox>

        <div className="mx-4 flex-center">
          <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>
        </div>
        <SmallCurvebox text={"DTH"} circleColor={colorObj.purple}>
          <LuSatelliteDish />
        </SmallCurvebox>
        <div className="mx-4 flex-center">
          <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>
        </div>
      </Marquee>

      {/* container-2 */}

      <Marquee direction="right">
        <div className="mx-4 flex-center">
          <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>
        </div>
        <SmallCurvebox text={"Rent Payment"} circleColor={colorObj.yellow}>
          <TbHomeDollar />
        </SmallCurvebox>
        <div className="w-12 h-12 mx-2 rounded-full bg-[#CDC5FF]" />
        <SmallCurvebox text={"Water"} circleColor={colorObj.grey}>
          <IoWaterOutline />
        </SmallCurvebox>

        <div className="mx-4 flex-center">
          <div className="w-12 h-12 mx-2 rounded-full bg-[#CDC5FF]" />

          <svg
            width="24"
            height="48"
            viewBox="15 0 30 60"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "0 8px 0 0",
              willChange: "transform",
            }}
          >
            <path d="M 45 0 a 30 30 0 0 0 0 60 z" fill="#F5BC7A" />
          </svg>
          <svg
            width="24"
            height="48"
            viewBox="15 0 30 60"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              margin: "0 8px 0 0",
              willChange: "transform",
            }}
          >
            <path d="M 45 0 a 30 30 0 0 0 0 60 z" fill="#FFDFBA" />
          </svg>
          <svg
            width="24"
            height="48"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: "rotate(45deg)",
              margin: "0 12px",
              willChange: "transform",
            }}
          >
            <g style={{ mixBlendMode: "multiply" }}>
              <rect width="30" height="30" rx="0" fill="#FFA3B5" />
            </g>
          </svg>
          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#8085C5" />
          </svg>
        </div>
        <Curvebox
          text={"Credit Card Payment"}
          circleColor={colorObj.purple}
          className={"px-4"}
        >
          <BsCreditCard />
        </Curvebox>
        <Curvebox text={"Broadband"} circleColor={colorObj.green}>
          <LuRouter />
        </Curvebox>
      </Marquee>

      {/* container-3 */}

      <Marquee>
        <Curvebox text={"Loan Repayment"} circleColor={colorObj.yellow}>
          <TbDatabaseDollar />
        </Curvebox>

        <div className="mx-4 flex-center">
          <div className="w-12 h-12 mx-2 rounded-full bg-teal-400" />

          <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>
        </div>

        <Curvebox text={"Recuring Deposit"} circleColor={colorObj.pink}>
          <BiBox />
        </Curvebox>
        <Curvebox text={"Cable TV"} circleColor={colorObj.pink}>
          <IoTvOutline />
        </Curvebox>

        <div className="mx-4 flex-center">
          <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>
        </div>
        <SmallCurvebox text={"Insurance"} circleColor={colorObj.grey}>
          <GoShieldCheck />
        </SmallCurvebox>
        <div className="mx-4 flex-center">
          <div className="w-12 h-12 mx-2 rounded-full bg-purple-300" />

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>

          <svg width="24" height="48" viewBox="15 0 30 60">
            <path d="M 15 0 A 30 30 0 0 1 15 60 L 15 0 Z" fill="#FFA3B5" />
          </svg>
        </div>
      </Marquee>
    </div>
  );
};

export default TickerSection;
