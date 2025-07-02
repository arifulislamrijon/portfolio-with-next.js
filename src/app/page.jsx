import Image from "next/image";
import img from "../../public/1732550054123(1).jpg"

export default function Home() {
  return (
     <div className="w-11/12 mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Text Section */}
      <div className="bg-rose-100 flex justify-center items-center rounded-tl-[40px] rounded-br-[40px] p-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Hi, This is <br />
            Ariful Islam Rijon
          </h1>
          <p className="mt-2 text-lg text-gray-700">Passionate Frontend Developer</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center">
        <Image
          src={img}
          alt="profile"
          height={400}
          width={400}
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
