import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Test = () => {
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
    <div className="relative h-[100vh] bg-[url('https://www.phonepe.com/static/gradient-desktop-67db057845f6e6447ae80d5ec7617aeb.png')] bg-cover bg-no-repeat flex-center overflow-hidden text-white ">
      <div className="flex absolute gap-2 top-[20%]  border-amber-300">
        <img
          src="./img/icons8-x-32.svg"
          width={"24px"}
          height={"24px"}
          alt=""
          className="invert brightness-0"
        />
        <h3 className="text-4xl iconText">Pay</h3>
      </div>
      <div className="flex absolute gap-2 top-[30%]  border-amber-300">
        <h3 className="text-8xl">
          Pay the
          <img
            src="./img/icons8-x-96.svg"
            alt=""
            className="invert brightness-0 inline"
          />
          way
        </h3>
      </div>

      <img
        src="https://www.apple.com/v/apple-pay/u/images/overview/hero__b48dkf54iseu_xlarge.png"
        alt="Mobile"
        className="img-hero absolute -bottom-[90%]  w-[600px] md:w-[600px] z-0"
      />
    </div>
  );
};

export default Test;
