import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const SubHero = () => {
  useGSAP(() => {
    const test1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#container1",
        start: "top 90%",
        end: "top 65%",
        scrub: true,
      },
    });
    const test1Timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#container2",
        start: "top 90%",
        end: "top 65%",
        scrub: true,
        markers: true,
      },
    });
    const test1Timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#container3",
        start: "top 90%",
        end: "top 65%",
        scrub: true,
      },
    });

    test1Timeline.fromTo(
      "#mask-path",
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 1, ease: "power1.out" }
    );

    test1Timeline2.fromTo(
      "#mask-path2",
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 1, ease: "power1.out" }
    );

    test1Timeline3.fromTo(
      "#mask-path3",
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 1, ease: "power1.out" }
    );
  }, []);

  return (
    <section className="rounded-b-[3.75rem] border border-amber-400">
      <div className="my-24 py-32 w-[50%] mx-auto h-full   ">
        <div className="flex flex-col gap-12">
          <svg
            id="container1"
            width="120"
            height="120"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle Background */}
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="#007FFF"
              strokeWidth="2"
            />

            {/* Define Mask */}
            <mask id="checkmark-mask">
              {/* The masked path gets drawn via GSAP */}
              <path
                id="mask-path"
                d="M14 27 L22 35 L38 18"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </mask>

            {/* This checkmark path is revealed by the mask */}
            <path
              d="M14 27 L22 35 L38 18"
              fill="none"
              stroke="#007FFF"
              strokeWidth="2"
              mask="url(#checkmark-mask)"
            />
          </svg>
          <h3 className="text-6xl font-bold w-[60%]">
            Faster and easier than using cards or cash.
          </h3>
        </div>

        {/* container-2 */}
        <div className="flex flex-col gap-12 my-24">
          <svg
            id="container2"
            width="120"
            height="120"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle Background */}
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="#007FFF"
              strokeWidth="2"
            />

            {/* Define Mask */}
            <mask id="checkmark-mask2">
              {/* The masked path gets drawn via GSAP */}
              <path
                id="mask-path2"
                d="M14 27 L22 35 L38 18"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </mask>

            {/* This checkmark path is revealed by the mask */}
            <path
              d="M14 27 L22 35 L38 18"
              fill="none"
              stroke="#007FFF"
              strokeWidth="2"
              mask="url(#checkmark-mask2)"
            />
          </svg>
          <h3 className="text-6xl font-bold w-[60%]">
            Pay in full, over time, or with your card’s rewards.
          </h3>
        </div>

        {/*  container-3 */}

        <div className="flex flex-col gap-12 mt-24">
          <svg
            id="container3"
            width="120"
            height="120"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circle Background */}
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="#007FFF"
              strokeWidth="2"
            />

            {/* Define Mask */}
            <mask id="checkmark-mask3">
              {/* The masked path gets drawn via GSAP */}
              <path
                id="mask-path3"
                d="M14 27 L22 35 L38 18"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </mask>

            {/* This checkmark path is revealed by the mask */}
            <path
              d="M14 27 L22 35 L38 18"
              fill="none"
              stroke="#007FFF"
              strokeWidth="2"
              mask="url(#checkmark-mask3)"
            />
          </svg>
          <h3 className="text-6xl font-bold w-[60%]">
            Privacy and security built in.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
