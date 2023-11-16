import { useEffect } from 'react';
import Image from 'next/image';

export default function MainHero() {
  useEffect(() => {
    if (document){
      let letter = 0;
  const text = "Julie Lizardo";
  function typeText() {
    if (letter < text.length) {
      document.getElementById("type-js").innerHTML += text.charAt(letter);
      letter++;
      let speed = Math.floor(Math.random() * 150) + 50;
      setTimeout(typeText, speed);
    }
  }
  typeText();
    }});
  
  return (
    <div className="bg-white relative lg:min-h-[86vh] isolate overflow-hidden">
     <div className="mx-auto sm:mb-8 lg:min-h-[86vmin] flex flex-col lg:items-center max-w-7xl px-6 lg:flex-row lg:px-8"> 
        

        <div id="character" className="mx-auto flex-none lg:flex max-w-2xl">
          <Image src="/images/me.png" width={320} height={333} alt="emoji version of me"></Image>
        </div>
        <div id="title" className="mx-auto max-w-2xl pb-6 lg:pb-0 lg:mx-0 lg:max-w-xl">
          <h1 id="type-js" className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-center text-[var(--c2)]">
          </h1>
          <h2 className="mt-12 text-3xl lg:text-3xl font-bold tracking-tight text-center text-gray-900">
            Web Developer, Educator, and Digital Creative based in Boston, MA.
          </h2>
          
        </div>
      </div>
    </div>
  )
}
