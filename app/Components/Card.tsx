import Image from "next/image";
import img from "../img.jpg";
export const Card = ({input}) => {
  return (
    <div className="flex flex-col">
      <div className="h-100 w-80 rounded-2xl border-1 border-foreground bg-slate-800 flex relative py-10 flex-col items-center gap-10 text-left">
        <span className=" bg-red-500 mac top-4 left-4"></span>
        <span className=" bg-yellow-500 mac top-4 left-9"></span>
        <span className=" bg-green-700 mac top-4 left-14"></span>
        <div className=" bg-sky-500/10 h-60 w-60 rounded-xl overflow-hidden ">
          <Image src={img} className="rounded-xl" alt="" />
        </div>
        <div className="">
            <h2 className="text-white font-bold text-2xl">@{input}</h2>
        </div>
      </div>
      <div className="flex justify-around py-10">
        <button className="button">Upload</button>
        <button className="button">Download</button>
      </div>
    </div>
  );
};
