"use client";
import React from "react";
import Jobs from "@/public/assets/jobs.jpeg";
import Image from "next/image";
import Button from "./components/Button/button";
// import Component from "./components/Carouselle/carouselle";

export default function Home() {
  return (
    <div>
      <div className="mx-10 mb-10">
        <div className=" bg-white">
          <div className="pt-20 3xl:pl-60 pl-44 pb-20 bg-purple-600 relative">
            <div className=" flex 3xl:mx-auto 3xl:fit 3xl:w-[80%]">
              <Image alt="darbas" src={Jobs} className="mr-14 3xl:w-[550px] " />
              <div className="w-[600px]">
                <p className="text-white font-google_font text-[50px] outline-8 outline p-5 ">
                  "Kažkada buvau bedarbis. Bet sugalvojau pradėt dirbti. Dėka
                  šios nuostabios platformos įkūriau gana sėkmingą obuolių
                  kompaniją" <br />
                  <span className="text-base">
                    {" "}
                    - STYVENAS DARBAS (DŽOBSAS)
                  </span>
                </p>
                {/* <p className="text-slate-300 font-semibold mt-3">
                - STYVENAS DARBAS (DŽOBSAS)
              </p> */}
              </div>
            </div>
            <Button />
          </div>
        </div>
      </div>
      {/* Jei veliau turesiu laiko */}
      {/* <Component /> */}
    </div>
  );
}
