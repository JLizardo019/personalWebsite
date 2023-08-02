import Image from "next/image";
import Link from "next/link";

export default function Logos({id}) {
    return (
      <div id ={id} className="rounded-lg pb-3 mt-3 bg-[var(--c1)] py-8 sm:py-10 lg:mt-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-8 pb-8 lg:grid-cols-2">

            <div className="mx-auto lg:order-1 w-full max-w-[45rem] lg:max-w-xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Over 4 years of teaching experience</h2>

              <p className=" mt-8 text-lg leading-8 text-gray-900">
                I have taught courses in computer programming principles, web development, artificial intelligence, and ethics in computer science. My students range from middle school to graduate students and working professionals.
                My goal in every class is to give you the confidence to fail while you learn and have fun in the process! 
              </p>
              <div className="mt-8 flex items-center gap-x-6">

                <Link
                  href="/curriculum"
                  className="rounded-2xl bg-[var(--c2)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--c2)]"
                >
                  Check it out! <span aria-hidden="true">&rarr;</span>
                </Link>
                {/* <Link href="/curriculum" className="text-sm font-semibold text-gray-900">
                  Learn More <span aria-hidden="true">&rarr;</span>
                </Link> */}
              </div>
            </div>
            <div className="mx-auto  grid w-[70%] max-w-[35rem] lg:max-w-xl items-center justify-center lg:mx-0  lg:pl-8">
              <Image
                className="rounded-lg mx-auto w-full lg:w-full object-contain object-left"
                src="/images/curriculum_logos.png"
                alt="NYU, TLT, ASC, and PI logos"
                width={2560}
                height={2560}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  