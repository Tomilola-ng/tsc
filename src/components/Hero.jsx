"use client";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <figure className="w-full h-40 rounded-md bg-neutral-950 mx-auto flex justify-center place-items-center">
      <h1 className="font-semibold text-2xl text-white w-full flex flex-col jusitfy-center items-center">
        <CheckCircle size={56} className="text-3xl mb-2 animate-bounce" /> Don{"'"}t forget to
        be awesome
      </h1>
    </figure>
  );
};

export default Hero;
