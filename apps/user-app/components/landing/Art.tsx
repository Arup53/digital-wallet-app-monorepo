import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../util/constants/constant";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    const test1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".container1",
        start:"top 90%",
        end: "center  40%",
        scrub: true,
      },
    });

   

    test1Timeline
      .to(".container1", {
        opacity: 1, duration: 1
      }).to('.container1',{
         opacity: 0, duration: 1, display:"none"
      }).to(".container2",{
         opacity: 1, duration: 1
      })
      
      

    // maskTimeline
    //   .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
    //   .to(".masked-img", {
    //     scale: 1.3,
    //     maskPosition: "center",
    //     maskSize: "400%",
    //     duration: 1,
    //     ease: "power1.inOut ",
    //   })
    //   .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });

    // maskTimeline
    //   .to(".container1 p", {
    //     opacity: 0,
    //     y: -200,
    //     duration: 1,
    //     ease: "power1.inOut",
    //   })
    //   .to(".container1 h1", {
    //     opacity: 0,
    //     duration: 1,
    //     display: "none",
    //     ease: "power1.inOut",
    //   })
    //   .fromTo(
    //     ".container2",
    //     { opacity: 0, duration: 1, ease: "power1.inOut" },
    //     { opacity: 1, duration: 1, ease: "power1.inOut" }
    //   );
  });

  return (
    <div id="art" className="bg-white my-24 py-12">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade"></h2>

        {/* <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-img">
            <img
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div> */}

        <div className=" flex justify-center items-center gap-12">
          <img
            
            className="container1 h1 -translate-y-40 h-[600px] object-contain"
            src="/img/a1.png"
            alt=""
          />
          {/* <p className="para text-4xl max-w-2xl">
            Set up in seconds. Right on your iPhone. Apple Pay is built into
            iPhone, Apple Watch, Mac, iPad, and Apple Vision Pro. To get started
            on iPhone, open the Wallet app and tap the plus symbol. Then add a
            credit or debit card by tapping the back of your iPhone with your
            eligible card.
          </p> */}
            <img
            className="container2 img2 -translate-y-40 h-[600px] object-contain"
            src="/img/android2.png"
            alt=""
          />
          {/* <p className="para2 text-4xl max-w-2xl">
            Pay the way that works for you. Apple Pay gives you flexibility at
            checkout. When you shop online and in apps with iPhone and iPad, you
            can pay in full or split your purchases into smaller payments over
            time through an eligible card or other pay later provider.
          </p> */}
        </div>
        
        
        

        {/* <div className="container2 flex-center">
          <h1 className="text-purple-500">Container-2</h1>
        </div> */}
      </div>
    </div>
  );
};
export default Art;
