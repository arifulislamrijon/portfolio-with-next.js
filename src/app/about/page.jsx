import React from "react";
import profile from "../../../public/1732550054123(1).jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-11/12 mx auto mt-42">
      <h1 className="font-bold text-2xl text-center">About me</h1>
      <div className="flex flex-col items-center gap-6 mt-4 ">
        <Image
          src={profile}
          alt="profile"
          className="w-48 h-48 rounded-full border-blue-500 object-cover"
        />
        <div className="text-lg leading-relaxed text-gray-700 rounded-4xl bg-blue-50 p-10">
           <p className="mb-4">
         Hi, I'm <span className="font-bold text-blue-600">Ariful Islam Rijon</span>.  
        I'm a passionate <span className="font-semibold">Frontend Web Developer</span> from Bangladesh.
      </p>
      <p className="mb-4">
        আমি HTML, CSS, JavaScript, React, Tailwind CSS এবং Next.js এর উপর কাজ করি।  
        পাশাপাশি MongoDB, Node.js দিয়ে Full-Stack প্রজেক্টও করেছি।
      </p>
      <p className="mb-4">
         আমার লক্ষ্য হলো একজন প্রফেশনাল Web Developer হওয়া এবং রিয়েল লাইফ সমস্যা সমাধানের মতো প্রজেক্ট বানানো।
      </p>
      <p className="mb-4">
         যখন সময় পাই, তখন নতুন টেকনোলজি শিখি, ইউআই ডিজাইন দেখি, আর GitHub-এ explore করি।
      </p>
        </div>
      </div>
    </div>
  );
};

export default page;
