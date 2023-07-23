import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// import components
import Layout from '../components/layout';
import MainHero from '../components/mainHero';
import Logos from '../components/logos';
import Container from '../components/container';
import MediaObject from '../components/mediaobject';
import Testimonials from '../components/testimonials'
import Contact from '../components/contact';


//latest projects
const projects = [
    {
        id: 1,
        title:"Cog-Sci-DIY",
        tools:[{name:'Node.js', id:"1"}, {name:'MySQL', id:"2"}, {name:'React.js', id:"3"}, {name:'SASS', id:"4"}], 
        descript:"!Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto."
        , image:"/images/OSU.png",
        url:"",
        code:"",
        alt: "Cog-Sci-DIY Screenshot"
    },
    {
        id:2,
        title:"My Personal Website",
        tools:[{name:'Next.js', id:"1"}, {name:'React.js', id:"2"}, {name:'Tailwind CSS', id:"3"}], 
        descript:"!Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto."
        , image:"/images/OSU.png",
        url:"",
        code:"",
        alt: "Cog-Sci-DIY Screenshot"
    }
]

export default function HomePage() {

    return(
        <>
            <Head>
                <title>Julie Lizardo | Web Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Layout>

                <MainHero>
                </MainHero>

                <Logos id="start">
                </Logos>
                <Container>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Knowledge in 17+ programming tools and frameworks</h2>
                    <p className="mt-6 text-lg mb-8 leading-8 text-gray-600">
                    I have taught courses in computer programming principles, web development, artificial intelligence, and ethics in computer science. My students range from middle school to graduate students and working professionals.
                    Check out my latest projects below!
                    </p>

                    {projects.map((item) => (
                    <MediaObject 
                    key = {item.id}
                    title={item.title} 
                    tools={item.tools} 
                    alt={item.alt}
                    descript={item.descript}
                    image={item.image}
                    url={item.url}
                    code={item.code}>
                    </MediaObject>
                    ))}
                    
                </Container>
                <Container>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">100% Satisfaction Guaranteed</h2>
                    <Testimonials>
                    
                </Testimonials>
                </Container>
                
                <Contact></Contact>
            </Layout>

        </>
    );

}