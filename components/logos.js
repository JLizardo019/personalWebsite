import Image from "next/image";
import Link from "next/link";

export default function Logos({id}) {
    return (
      <div id ={id} className="rounded-lg pb-3 bg-[var(--c1)] py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-[45rem] lg:max-w-xl lg:mx-0">
              <h2 className="text-5xl font-bold tracking-tight text-gray-900">Over 4 years of teaching experience</h2>
              <p className=" mt-8 text-xl leading-8 text-gray-900">
                I have taught courses in computer programming principles, web development, artificial intelligence, and ethics in computer science. My students range from middle school to graduate students and working professionals.
                My goal in every class is to give you the confidence to fail while you learn and have fun in the process! 
              </p>
              <div className="mt-8 flex items-center gap-x-6">

                <Link
                  href="/curriculum"
                  className="rounded-2xl bg-[var(--c2)] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c2)]"
                >
                  Check it out! <span aria-hidden="true">&rarr;</span>
                </Link>
                {/* <Link href="/curriculum" className="text-sm font-semibold text-gray-900">
                  Learn More <span aria-hidden="true">&rarr;</span>
                </Link> */}
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-[43rem] lg:max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0  lg:pl-8">
              <Image
                className="max-h-16 w-full object-contain object-left"
                src="/images/nyu.png"
                alt="NYU"
                width={192}
                height={12}
              />
              <Image
                className="h-full max-w-16 object-contain object-left"
                src="/images/asc.webp"
                alt="All Star Code"
                width={200}
                height={200}
              />
              <Image
                className="h-full max-w-16 object-contain object-left"
                src="/images/tlt.png"
                alt="Teachers Lead Tech"
                width={199}
                height={160}
              />
              <Image
                className="h-full max-w-10 object-contain object-left"
                src="/images/pi.png"
                alt="Project InkBlot"
                width={190}
                height={190}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  