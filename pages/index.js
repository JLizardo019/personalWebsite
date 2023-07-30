import Head from 'next/head';
import { useEffect } from 'react';

// import components
import Layout from '../components/layout';
import MainHero from '../components/mainHero';
import Logos from '../components/logos';
import Container from '../components/container';
import MediaObject from '../components/mediaObject';
import Testimonials from '../components/testimonials'
import Contact from '../components/contact';

//latest projects
const projects = [
    {
        id: 1,
        title:"Cog-Sci-DIY",
        tools:[{name:'Node.js', id:"1"}, {name:'MySQL', id:"2"}, {name:'React.js', id:"3"}, {name:'SASS', id:"4"}, {name:'Firebase', id:"5"}, {name:'Figma', id:"6"}], 
        descript:"A web application used to conduct research in fields of linguistics and cognitive psychology with high school students and freshman college students. It features a content management system that includes web forms to create web pages, upload content, add surveys, hyperlinks and forum discussion boards."
        , image:"/images/OSU.png",
        url:"https://create.nyu.edu/cogscidiy/",
        code:"",
        alt: "Cog-Sci-DIY Screenshot"
    },
    {
        id:2,
        title:"julielizardo.com",
        tools:[{name:'Next.js', id:"1"}, {name:'React.js', id:"2"}, {name:'Tailwind CSS', id:"3"}, {name:'Figma', id:"4"}, {name:'Adobe Suite', id:"5"}], 
        descript:"Tired of my previous website design, I built version 2.0! I wanted to include more playfulness to the front-end and have the asthetic reflect my personality more."
        , image:"/images/OSU.png",
        url:"/",
        code:"https://github.com/JLizardo019/personalWebsite",
        alt: "Personal Website Screenshot"
    }
]

export default function HomePage() {

    useEffect(() => {

        if(document){
            let opener = document.getElementById("opener");
            let page = document.getElementById("layout");
            let logo = document.getElementById("logoA");
        }
            
            

            // setTimeout(() => {
            //     console.log("here");
            //     opener.style.display = "none";
            //     page.style.display = "block";
            // }, 1000);
        
    });
    return(
        <>
            <Head>
                <title>Julie Lizardo | Web Developer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-png" href="/images/favicon.png"></link>
            </Head>
            <div id="opener" className='w-screen h-screen flex justify-center items-center absolute z-20 top-0 bg-white overflow-hidden'>
                {/* <img id="logoA" className="w-[40rem]" src="/images/logo2.svg" alt="logo"/> */}
                <svg data-name="Layer 4"  viewBox="0 0 1268.638 959.079">
  <path id="logoA" d="m1228.138,381.7468c-27.24,99.26-182.13,104.06-238.87,29-39.09-48.62-35.6799-128.41,12.05-168.59,43.1899-36.33,83.5499-5.52,72.7,47.06-26.9079,211.9097-314.6972,200.6612-269.8331,11.5546.4237-1.786,2.7552-2.2542,3.8328-.7683l2.7917,3.8494c.3694.5094.5689,1.1221.5657,1.7513-.3886,78.68-36.0301,167.2624-107.527,206.1729-152.4,59.66-131.69-330.19-121.96-414.96,1.62-22.08,8.55-50.9,33.48-55.9,21.45-3.68,38.53,17.68,47.43,37.55,57.82,129.94-5.75,278.15-98.63,375.04-69.61,81.95-136.1,6.61-147.7-74.32l.4332-10.8802c.051-1.2801-1.7982-1.5219-2.0698-.2698-8.8745,40.91-34.0157,109.6242-74.9334,104.7901-35.3517-12.3503-46.6046-68.7009-46.3586-105.8765.0044-.6605-.9573-.7316-1.0509-.0778l-3.3005,23.0542C149.198,506.1568-15.452,683.2868,59.068,877.5868c7.3,17.8,19.09,36.4501,37.94,40.29,21.63,4.4,41.47-12.64,55.27-29.86,128.26-155.32,34.51-362.17-41.82-519.46" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="81"/>
</svg>
            </div>
            <Layout>

                <MainHero>
                </MainHero>

                <Logos id="curriculum">
                </Logos>
                <Container id="projects">
                    <h2 className="mt-20 text-5xl font-bold tracking-tight text-gray-900">Knowledge in 17+ programming tools and frameworks</h2>
                    <p className="mt-8 text-xl mb-8 leading-8 text-gray-600">
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
                
                <Testimonials>  
                </Testimonials>
               
                
            </Layout>

        </>
    );

}