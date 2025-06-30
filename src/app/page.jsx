import Image from "next/image";
import img from "../../public/1732550054123(1).jpg"

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-8 mt-42 w-11/12 mx-auto ">
     <div className="bg-rose-100 flex justify-center items-center rounded-tl-4xl rounded-br-4xl">
     <div>
       <h1 className="text-4xl font-bold">Hi, This is <br /> Ariful Islam Rijon</h1>

      <p>Passionate Frontend Developer</p>
     </div>
     </div>
     <div className="flex justify-center items-center">
       <Image src={img} alt="profile" height={500} width={500}></Image>
     </div>
    </div>
  );
}
