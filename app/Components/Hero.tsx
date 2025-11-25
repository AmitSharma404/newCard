'use client'
import { useState } from 'react';
import { Card } from "./Card"



export const Hero = () => {
    const [input,setInput] = useState("");
    const [date,setDate] = useState("");
    const [quote,setQuote] = useState('');

    return(
        <div className="min-h-screen w-full sm:flex sm:justify-between">
            <div className="min-w-100 min-h-full border-r border-slate-500 bg-slate-100 flex flex-col items-center py-10 gap-14">
               <div className='flex flex-col'>
                <label htmlFor="lable" className='text-lg font-semibold'>Title</label>
                 <input type="text" className="bg-foreground w-70 h-10 rounded-md border border-slate-950/20 px-3 font-semibold" onChange={(e) => setInput(e.target.value)}/>
               </div>
               <div className='flex flex-col'>
                    <label htmlFor="data" className='text-lg font-semibold'>Date</label>
                    <input type="date" className='g-foreground w-70 h-10 rounded-md border border-slate-950/20 px-3 font-semibold' 
                    onChange={(e) => setDate(e.target.value)}/>
               </div>
               <div className='flex flex-col'>
                    <label htmlFor="data" className='text-lg font-semibold'>Date</label>
                    <textarea className='g-foreground w-70 h-30 rounded-md border border-slate-950/20 px-3 font-semibold pt-2' style={{
                      resize:'none'
                    }}
                    onChange={(e) => setQuote(e.target.value)}/>
               </div>
            </div>
           <div className="flex items-center justify-center w-full"
           style={{
            backgroundImage:`radial-gradient(circle at center,#ccc 15%,#e3e3e3 0%)`,
            backgroundSize:"10px 10px"
           }}>
             <Card input={input} date={date} quote={quote}/>
           </div>
        </div>
    )
}