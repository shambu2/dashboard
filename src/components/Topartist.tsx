// import React from "react";

const Topartist = () => {
  return (
    <div className="grid items-center justify-center rounded-lg border-[1px]">
      <div className="text-2xl font-semiboldd text-blue-500 pt-14 mb-4  ">
        <p>Top 5 Artists  </p><span>Globally</span>
      </div>

      <div className="text-justify list-decimal grid  justify-center pb-6 sm:pb-24 sm:mb-4 sm:text-nowrap  text-base ">
        <li>Tylor Swift</li>
        <li>The Weekend</li>
        <li>Bad Bunny</li>
        <li>Drake</li>
        <li>Billie Ellish</li>
      </div>
    </div>
  );
};

export default Topartist;
