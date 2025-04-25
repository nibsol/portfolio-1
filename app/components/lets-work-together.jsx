
import { Leaf, Dots, Stars } from "../assets/svgs/icons/elements";

function WorkTogether() {
  return (
    <div className="flex items-center justify-center max-w-6xl mx-auto min-h-[50vh] md:min-h-[80vh]">
      <div className="w-full space-y-4 text-center px-4 sm:px-8 lg:px-16">
        {/* First Heading */}
        <div className="relative">
          <span className="absolute -left-4 sm:-left-8 -top-4 sm:-top-8 w-8 h-8 sm:w-12 sm:h-12 text-purple-200 -z-10">
            <Leaf />
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-[72px] lg:text-[96px] font-bold leading-tight">
            LET'S<br />
            START WORKING
          </h1>
        </div>

        {/* TOGETHER */}
        <div className="relative">
          <span className="bg-[#FFC310] text-white rounded-xl px-4 py-2 text-3xl sm:text-5xl md:text-[72px] lg:text-[96px] font-bold inline-block">
            TOGETHER.
          </span>
          <span className="absolute right-40 xl:right-4 top-full w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-cyan-300 -z-10">
            <Dots />
          </span>
        </div>

        {/* Second Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-[72px] lg:text-[96px] font-bold leading-tight">
          GET IN TOUCH WITH
        </h2>

        {/* ME! */}
        <div className="relative">
          <h1 className="text-3xl sm:text-5xl md:text-[72px] lg:text-[96px] font-bold leading-tight">
            ME!
          </h1>
          <span className="absolute left-12 sm:left-48 bottom-8 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-blue-400 -z-10">
            <Stars />
          </span>
        </div>
      </div>
    </div>
  );
}
export default WorkTogether