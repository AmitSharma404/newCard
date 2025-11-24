import Image from "next/image";
import img from "../img.jpg";
export const Card = (props) => {
  return (
    <div className="flex flex-col">
      <div className="h-100 w-80 rounded-2xl border-1 border-foreground bg-slate-800 flex relative pt-10 flex-col items-center gap-10 text-left">
        <span className=" bg-red-500 mac top-4 left-4"></span>
        <span className=" bg-yellow-500 mac top-4 left-9"></span>
        <span className=" bg-green-600 mac top-4 left-14"></span>
        <div className=" bg-sky-500/10 h-60 w-60 rounded-xl overflow-hidden ">
          <Image src={img} className="rounded-xl" alt="" />
        </div>
        <div className="text-left w-full px-10 pb-4">
          <h2 className="text-white font-bold text-2xl">@{props.input}</h2>
          <p className="text-white text-end font-semibold ">{props.date}</p>
        </div>
      </div>
      <div className="flex justify-around py-10">
        <div className="relative w-40">
          {" "}
          <div className="flex items-center justify-centertransition-colors">
            <span className="font-semibold button">Upload</span>
          </div>
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <button className="button">Download</button>
      </div>
    </div>
  );
};
