import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';


export default function MainHero() {
  return (
    <div className="relative lg:min-h-[92vh] isolate overflow-hidden bg-red-800">
      {/* <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg> */}
      {/* update the padding className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-16"*/}
     {/* box around everthing */}
     <div className="mx-auto lg:min-h-[92vmin] lg:items-center max-w-7xl px-6 lg:flex lg:px-8"> 
        <div className="mx-auto max-w-2xl pb-24 lg:pb-0 lg:mx-0 lg:max-w-xl">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Web developer, educator, and digital creative.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hi, my name is Julie Lizardo. I am a web developer, educator, and digital creative based in Boston, Massachusetts. I am passionate about computer science and helping misrepresented communities find opportunities in the fast-growing field of tech. 
            Hi, I am a I am a web developer, educator, and digital creative.
            Hi, I am a I am a web developer, educator, and digital creative.
            Hi, I am a I am a web developer, educator, and digital creative.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="#start"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get to know me <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto flex-none lg:flex max-w-2xl">
          <div className="mx-auto flex-none">
              <Image
                src="/images/meDrawing.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[80%] mx-auto lg:ml-11"
              />
          </div>
        </div>
      </div>
    </div>
  )
}
