import { Hero } from "./src/Components/Hero";

export default function Home() {
  return (
    <>
    <div className="text-center font-bold min-h-screen" 
    style={{
      backgroundSize:'50px 50px',
      backgroundImage:`linear-gradient(to left,#ffffff15 1px,transparent 1px),
      linear-gradient(to bottom,#ffffff15 1px,transparent 1px)`,
    }}>
      <Hero/>
    </div>
    </>
  );
}
