import { useEffect } from 'react';
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import img from "../img.jpg";
import badge from "../badge.svg";
export const Card = (props) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(null);
      setPreview(null);
      return;
    }
    const file = e.target.files?.[0];
    setFile(file);

    const ObjectURL = URL.createObjectURL(file);
    setPreview(ObjectURL);
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);
  return (
    <div className="flex flex-col">
      <div
        className="h-100 w-80 rounded-2xl border-1 border-foreground backdrop-blur-2xl flex relative pt-10 flex-col items-center gap-10 text-left
      shadow-[0_0_60px]/10"
      >
        <span className=" bg-red-500 mac left-4"></span>
        <span className=" bg-yellow-500 mac left-9"></span>
        <span className=" bg-green-600 mac left-14"></span>
        <div className=" bg-sky-500/10 h-60 w-60 rounded-xl overflow-hidden shadow-[0_0_60px_#3eaace]/20 ">
          <Image src={preview} className="rounded-xl" alt={img} width={300} height={400} />
        </div>
        <div className="text-left w-full px-10 pb-4 overflow-x-hidden">
          <h2 className="text-background font-bold text-2xl flex gap-2 items-center tracking-tight">
            @{props.input}
            <Image src={badge} alt="" />
          </h2>
          <p className="text-background/40 text-end font-semibold ">
            {props.date}
          </p>
        </div>
      </div>
      <div className="flex justify-around py-10">
        <div className="relative w-40">
          {" "}
          <div className="flex items-center justify-center transition-colors">
            <span className="font-semibold button text-sky-500 bg-sky-500/10">
              Upload
            </span>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={HandleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <button className="button bg-pink-500/10 text-pink-500">
          Download
        </button>
      </div>
    </div>
  );
};
