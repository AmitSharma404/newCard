'use client'
import { useState } from 'react';
import { Card } from "./Card"

export const Hero = () => {

    const [input,setInput] = useState('');

    console.log(input);

    return(
        <div className="min-h-screen w-full flex justify-between">
            <div className="min-w-100 min-h-full border-r border-slate-500 bg-slate-100 flex justify-center py-10">
               <div className='flex flex-col'>
                <label htmlFor="lable" className='text-lg font-semibold'>Title</label>
                 <input type="text" className="bg-foreground w-70 h-10 rounded-md border border-slate-950/20 px-3 font-semibold" onChange={(e) => setInput(e.target.value)} />
               </div>
            </div>
           <div className="flex items-center justify-center w-full">
             <Card input={input}/>
           </div>
        </div>
    )
}