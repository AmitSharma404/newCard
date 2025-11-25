import { useEffect, useRef } from "react";
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import html2canvas from "html2canvas-pro";
import icon from '../badge.svg';
export const Card = ({data}) => {
  const {date,input,quote} = data;
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
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
  const HandleDownload = async () => {
    const element = cardRef.current;
    if(!element) return;
    
    const canvas = await html2canvas(element,{
      scale:4
    })

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'card.png';
    link.click();
  }

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
        ref={cardRef}
        className="h-100 w-80 rounded-2xl border border-foreground backdrop-blur-2xl flex relative pt-10 flex-col items-center gap-4 text-left bg-neutral-900"
      >
        <span className=" bg-red-500 mac left-4"></span>
        <span className=" bg-yellow-500 mac left-9"></span>
        <span className=" bg-green-600 mac left-14"></span>
        <div className=" bg-pink-500/10 h-60 w-60 rounded-xl overflow-hidden bg-center">
          <Image src={preview}
            className="rounded-xl"
            alt={'../img.jpg'}
            width={500}
            height={500}
          />
        </div>
        <div className="w-full px-10 pb-1 overflow-x-hidden flex-col justify-between">
          <h2 className="text-foreground font-extrabold text-md  text-end flex gap-1 tracking-tight py-1 items-center">
            @{input}
            <Image src={icon} alt="" className="size-4" />
          </h2>
          <p className="text-foreground/80 font-semibold text-sm">
            {quote}
          </p>
          <p className="text-slate-500 font-semibold text-sm text-end">
            {date}
          </p>
        </div>
      </div>
      <div className="flex justify-between py-10">
        <div className="relative w-auto">
          {" "}
          <div className="flex items-center justify-center transition-colors">
            <span className="font-semibold button text-sky-500 bg-sky-500/10 shadow-sky-500/40">
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
        <button 
        onClick={HandleDownload}
        className="button bg-pink-500/10 text-pink-500 shadow-pink-500/40">
          Download
        </button>
      </div>
    </div>
  );
};
