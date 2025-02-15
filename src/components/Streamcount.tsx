import React from "react";
import { Podcast, TrendingUp } from "lucide-react";
const Streamcount = () => {
  return (
    <div className="grid aspect-video items-center justify-center border-2 pb-6  sm:py-8 md:py-14 lg:py-14 rounded-xl ">
      <div className="">
        <p className="text-2xl mt-10 font-black">Total strems</p>
        <p className="mt-8 text-3xl flex items-center  justify-center gap-2 font-black text-blue-500">
          100m{" "}
          <span>
            <Podcast size={30} />
          </span>
        </p>
      </div>
      <div>
        <p className="text-2xl font-black mt-10 text-green-500">
          Streamed Minutes
        </p>
        <div className="text-base mt-4 flex items-center justify-center text-wrap">
          <p className="text-2xl flex items-center justify-center ">1.2B</p>
          <p className="mx-2 text-slate-500 flex ">Minutes</p>
          <span>
            <TrendingUp color="green"/>
          </span>
        </div>
        

      </div>
    </div>
  );
};

export default Streamcount;
