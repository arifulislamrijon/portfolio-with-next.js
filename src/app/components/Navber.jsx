import Link from "next/link";
import React from "react";

const Navber = () => {
  return (
   <div className="fixed top-0 left-0 w-full bg-blue-50 shadow z-50">
     <div className="w-11/12 mx-auto flex justify-between items-center py-4 ">
      <div className="font-bold text-2xl">
        <p className="-mx-1">Ariful Islam <br /> Rijon</p>
      </div>
      <div className="flex font-bold text-xl gap-7 hover:underline">
        <Link href="/">Home</Link>
        <Link href="/about">About </Link>
        <Link href="/projects">Projects </Link>
        <Link href="/contact">Contact </Link>
      </div>
    </div>
   </div>
  );
};

export default Navber;
