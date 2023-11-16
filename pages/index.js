import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import animation library
import 'animate.css';

// import components
import Layout from '../components/layout';
import MainHero from '../components/mainHero';
import Container from '../components/container';
import Badge2 from '../components/badge2';

let tools = [{name:'TypeScript', id:"26"}, {name:'HTML', id:"1"}, {name:'CSS', id:"2"}, {name:'SASS', id:"3"}, {name:'JavaScript', id:"4"}, {name:'Python', id:"5"}, {name:'Java', id:"6"}, {name:'PHP', id:"7"}, {name:'React.js', id:"8"}, {name:'p5.js', id:"9"}, {name:'MongoDB', id:"10"}, {name:'Firebase', id:"11"}, {name:'SQL', id:"12"}, {name:'Tailwind CSS', id:"13"}, {name:'Next.js', id:"14"}, {name:'Node.js', id:"15"}, {name:'Bootstrap', id:"16"}, {name:'Git', id:"17"}, {name:'RESTful APIs', id:"24"}, {name:'Agile Development', id:"25"}, {name:'Figma', id:"18"}, {name:'Adobe Suite', id:"19"}, {name:'Vercel', id:"20"}, {name:'Heroku', id:"21"}, {name:'Google Analytics', id:"22"}, {name:'Formspree', id:"23"}, {name:'Postman', id:"24"}]; 

export default function HomePage() {

    useEffect(() => { // manage opening animations

        if(document){
            let opener = document.getElementById("opener");
            let page = document.getElementById("layout");
            let nav = document.getElementById("navbar");
            let title = document.getElementById("title");
            let character = document.getElementById("character");
            page.style.display = "none";
            
            let first = sessionStorage.getItem("first");

            if (first == null){
                sessionStorage.setItem("first", "yes");

                setTimeout(() => {
                    opener.style.display = "none";
                    page.style.display = "block";
                    nav.style.animation = "fadeInDown 1.5s";
                    title.style.animation = "fadeInLeft 1.5s";
                    character.style.animation = "fadeInRight 1.5s";    
                }, 4000); 
            }
            else{
                opener.style.display = "none";
                page.style.display = "block";
                nav.style.animation = "fadeInDown 1.5s";
                title.style.animation = "fadeInLeft 1.5s";
                character.style.animation = "fadeInRight 1.5s";
            }

            
        }
        
    });
    return(
        <>
            <Head>
                <title>Julie Lizardo | Web Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-png" href="/images/favicon.png"></link>
            </Head>
            
            <div id="opener" className='w-screen h-screen absolute flex justify-center items-center z-20 top-0 bg-white overflow-hidden'>
                <svg id="animation" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1268.6379 959.0791">
  <path id="name" d="m1228.1379,381.7469c-27.24,99.26-182.13,104.06-238.87,29-39.09-48.62-35.6799-128.41,12.05-168.59,43.1899-36.33,83.5499-5.52,72.7,47.06-26.908,211.9097-314.6972,200.6612-269.8331,11.5546.4237-1.786,2.7552-2.2542,3.8328-.7683l2.7917,3.8494c.3694.5094.5689,1.1221.5657,1.7513-.3886,78.68-36.0301,167.2624-107.527,206.1729-152.4,59.66-131.69-330.19-121.96-414.96,1.62-22.08,8.55-50.9,33.48-55.9,21.45-3.68,38.53,17.68,47.43,37.55,57.82,129.94-5.75,278.15-98.63,375.04-69.61,81.95-136.1,6.61-147.7-74.32l.4332-10.8802c.051-1.2801-1.7982-1.5219-2.0698-.2698-8.8745,40.91-34.0157,109.6242-74.9334,104.7901-35.3517-12.3503-46.6046-68.7009-46.3586-105.8765.0044-.6605-.9573-.7316-1.0509-.0778l-3.3005,23.0542C149.198,506.1569-15.452,683.2869,59.068,877.5869c7.3,17.8,19.09,36.4501,37.94,40.29,21.63,4.4,41.47-12.64,55.27-29.86,128.26-155.32,34.51-362.17-41.82-519.46" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="81"/>
  <path id="heart" d="m860.3779,98.6968c-15.13-30.32-44.83-15.24-55.55,9.88.05-.12.1-.24.16-.36-2.22,4.46-3.23,7.45-4.23,12.64-7.28-8.56-14.05-18.48-24.24-23.77.36.25.8.64,1.11.86-33.32-15.41-40.5,43.88-26.24,62.92,14.34,18.69,33.35,33.14,50.82,48.71,5.61,3.89,8.25,12.1,15.96,11.94,8.97.42,19.9399-28.8,23.09-35.58,16.48-27.15,32.6901-53.84,19.12-87.24Zm-68.71,87.24c-.46-.38-.92-.76-1.38-1.15.51.19,1.02.38,1.52.57-.05.19-.1.38-.14.58Z" fill="#eb6382"/>
  <path id="dot" d="m119.0379,222.1769c.52-30.26,45.53-30.26,46.05,0-.52,30.27-45.54,30.26-46.05,0Z" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="51"/>
</svg>
            </div>
            <Layout>
                <MainHero>
                </MainHero>

                <Container id="projects" bg="bg-[var(--c1)]">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">1. Knowledge in 20+ Programming Tools and Frameworks</h2>
                    
                    <div className='mb-6'>
                    {tools.map((item) => (
                        <Badge2 className="text-center" key={item.id} name={item.name}></Badge2>
                    ))}
                    </div>
                    <Link href="/projects" className="text-lg mt-4 mb-6 squiggle font-semibold leading-6 text-gray-900 hover:text-[var(--c2)]">
                Check out my latest projects! <span aria-hidden="true">→</span>
              </Link>
                    
                </Container>

                <Container id="curriculum">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 p-2">2. Over 4 Years of Programming and Teaching Experience</h2>

        <div className="flex flex-col justify-between items-center lg:flex-row">

        <div className="mx-auto mt-8 lg:mx-0  lg:pr-16">
          <Image
            className="rounded-lg mx-auto max-w-xs lg:max-w-md "
            src="/images/curriculum_logos.png"
            alt="NYU, TLT, ASC, and PI logos"
            width={600}
            height={600}
            priority="true"
          />
        </div>


        <div className="mx-auto lg:mx-0">

          <p className=" mt-8 text-lg leading-8 text-gray-900">
            I have taught courses in computer programming principles, web development, artificial intelligence, digital literacy and ethics in computer science. My students range from middle school to graduate students and working professionals.
            During my career, I have taught 550+ students and trained the next generation of software engineers on the best practices of the industry. Now, it is my turn to leave the classroom and gain valuable industry experience to bridge my knowledge between theory and practice. 
          </p>
          <div className="mt-8 flex items-center gap-x-6">

            <Link href="/curriculum" className="text-lg mt-4 squiggle font-semibold leading-6 text-gray-900 hover:text-[var(--c2)]">
                Learn more about the courses I have taught! <span aria-hidden="true">→</span>
              </Link>
          </div>
        </div>
        </div>
                </Container>

                <Container id="testimonials" className="mt-0" bg="bg-[var(--c1)]">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mx-auto max-w-3xl lg:max-w-7xl mb-8">3. 100% Satisfaction Guaranteed</h2>
        <div className="bg-white py-4 rounded-lg sm:py-16 mx-auto max-w-[44rem] lg:max-w-[76rem] px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <img className="h-8 self-start" src="/images/nyu.png" alt="NYU Logo" />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-600">
                  <p>
                    “I didn't really see myself coding in college; but it happened to be part of my major requirements. After finishing this course; I'm grateful to have taken it. I really appreciate Prof. Lizardo for making the challenge of learning to code for the first time really approachable and engaging. Despite its difficulties and my frustration at times; I do feel smarter and more capable as a student; and I'm considering spending more time diving into the world of computer science.”
                  </p>
                </blockquote>
                <Link href="https://www.ratemyprofessors.com/professor/2719545" target="_blank" className="text-sm squiggle mt-4 font-semibold leading-6 text-gray-900 hover:text-[var(--c2)]">
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
                <blockquote className="text-lg leading-8 text-gray-600">
                  <p>
                    “Julie always goes the extra mile to make the product look and work great and she is a tremendous team player. Seeing her work is a real treat. She is a professional, a fast learner, very knowledgable in web technologies and not afraid of a real challenge. In addition, she is a programmer with a good sense of design and can easily wear many hats and will always try to go to the next level.”
                  </p>
                </blockquote>
                <Link href="https://www.linkedin.com/in/julie-lizardo/" target="_blank" className="text-sm mt-4 squiggle font-semibold leading-6 text-gray-900 hover:text-[var(--c2)]">
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
                </Container>
               
            </Layout>

        </>
    );

}