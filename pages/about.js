import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Container from '../components/container';
import { useEffect } from 'react';

import 'animate.css';

let interests=[{name:'Hiking',  source:"/images/hiking.HEIC", id:"1"}, {name:'Fishing',source:"/images/fishing.JPG", id:"2"}, {name:'Performing Aerial Yoga', source:"/images/yoga.JPG", id:"3"}, {name:'Playing Zelda:TotK', source:"/images/zelda.jpeg", id:"4"}]; 

export default function AboutPage() {
    useEffect(() => {

        if(document){
            let nav = document.getElementById("navbar");
            let text = document.getElementById("text");
            let photo = document.getElementById("photo");
            let title = document.getElementById("title");
            nav.style.animation = "fadeInDown 1.5s";
            title.style.animation = "fadeInDown 1.5s";
            text.style.animation = "fadeInLeft 1.5s";
            photo.style.animation = "fadeInRight 1.5s";
            
        }
    
    });

    return(
        <Layout>
            <Head>
                <title>About | Julie Lizardo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-png" href="/images/favicon.png"></link>

            </Head>
            <Container>
                <h2 id="title" className="mt-2 text-center text-4xl font-bold text-gray-900">About</h2>
                <div className='mt-6 lg:flex lg:justify-between'>
                    <div id="photo" className='justify-center flex p-3 lg:w-2/4'>
                        <Image className='border-[var(--c1)] border-4 sm:max-w-[20rem] lg:max-w-[25rem] lg:max-h-[25rem] rounded-full' width={1280} height={1280} src="/images/headshot.png" alt="Image of Julie" priority={true}/>
                    </div>
                    <div id="text" className='lg:order-first my-3 p-3 lg:w-2/4'>
                        <p className='mb-8 text-lg leading-8 text-gray-600'>Hi, I am Julie! I am a proud Dominican, and born & raised New Yorker. I have recieved 2 degrees: 1&#41; Bachelor of Arts from NYU College of Arts and Science in Biology and a minor in Computer Science and Math 2&#41; Master of Professional Studies at NYU Interactive Telecommunications Program in Computer Science and Art. I currently work at NYU as an Adjunct Professor in the Department of Computer Science and as a Multifunctional Specialist at the ed-tech start-up Teachers Lead Tech. My passion encompasses creating robust digital solutions and  empowering misrepresented communities to pursue computer science education.</p>
                        
                        <p className='mb-8 text-lg leading-8 text-gray-600'>Growing up, I was never exposed to computer science and it never appeared as a possible career choice that was accessible to me. I was intimidated by the complexity of the field and how the field was predominantly male. It was not until college that I had the opportunity to enroll in a computer science course as an elective. Since then, it has become my personal mission to expand my programming skills as much as possible and help others to start their computer science journey.</p>
                        
                        <p className='text-lg leading-8 text-gray-600'>Today, I am a seeking full-time opportunties in the web developement and software engineering space to bridge my knowlege between theory and practice.</p>
                    </div>
                </div>
                <div className='mt-8'>
                    <h4 className='text-xl text-gray-900 font-bold'>During my free time, you can find me ...</h4>
                    <ul role="list" className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {interests.map((item) => (
                            <li key={item.key} className="relative">
                            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100">
                                <img src={item.source} alt="hobbies" className="pointer-events-none object-cover" />
                                
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-lg font-medium text-gray-900">{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>

        </Layout>
    );

}