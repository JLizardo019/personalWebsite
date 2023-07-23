import Link from "next/link";

export default function Testimonials() {
    return (
      <section className="bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <img className="h-8 self-start" src="/images/nyu.png" alt="NYU Courant Logo" />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>
                    “I didn't really see myself coding in college; but it happened to be part of my major requirements. After finishing this course; I'm grateful to have taken it. I really appreciate Prof. Lizardo for making the challenge of learning to code for the first time really approachable and engaging. Despite its difficulties and my frustration at times; I do feel smarter and more capable as a student; and I'm considering spending more time diving into the world of computer science.”
                  </p>
                </blockquote>
                <Link href="https://www.ratemyprofessors.com/professor/2719545" target="_blank" className="text-sm mt-4 font-semibold leading-6 text-gray-900">
                Read more on RateMyProfessor <span aria-hidden="true">→</span>
              </Link>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src="/images/anon.jpeg"
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">Anonymous</div>
                    <div className="mt-1 text-gray-500">NYU Computer Science Student</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <img className="h-6 self-start" src="/images/create-logo.png" alt="NYU Create Logo" />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-900">
                  <p>
                    “Julie always goes the extra mile to make the product look and work great and she is a tremendous team player. Seeing her work is a real treat. She is a professional, a fast learner, very knowledgable in web technologies and not afraid of a real challenge. In addition, she is a programmer with a good sense of design and can easily wear many hats and will always try to go to the next level.”
                  </p>
                </blockquote>
                <Link href="https://www.linkedin.com/in/julie-lizardo/" target="_blank" className="text-sm mt-4 font-semibold leading-6 text-gray-900">
                Read more on LinkedIn <span aria-hidden="true">→</span>
              </Link>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src="/images/Al-Olsen.jpg"
                    alt="Al Olsen"
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-900">Al Olsen</div>
                    <div className="mt-1 text-gray-500">Research Scientist and Software Developer at NYU CREATE LAB</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
  