import { useEffect } from 'react';

// import components
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import MediaObject from '../components/mediaObject';
import Script from 'next/script';

//latest projects
const projects = [
    {
        id: 1,
        title:"Cog-Sci-DIY",
        tools:[{name:'Node.js', id:"1"}, {name:'SQL', id:"2"}, {name:'React.js', id:"3"}, {name:'SASS', id:"4"}, {name:'Firebase', id:"5"}, {name:'Figma', id:"6"}], 
        descript:"A web application used to conduct research in fields of linguistics and cognitive psychology with high school students and freshman college students. It features a content management system that includes web forms to create web pages, upload content, add surveys, hyperlinks and forum discussion boards."
        , image:"/images/OSU.png",
        url:"https://create.nyu.edu/cogscidiy/",
        code:"",
        alt: "Cog-Sci-DIY Screenshot"
    },
    {
        id:2,
        title:"julielizardo.com",
        tools:[{name:'Next.js', id:"1"}, {name:'React.js', id:"2"}, {name:'Tailwind CSS', id:"3"}, {name:'Figma', id:"4"}, {name:'Adobe Suite', id:"5"}, {name:'Vercel', id:"6"}], 
        descript:"Tired of my previous website design, I built version 2.0! I wanted to include more playfulness to the front-end and have the asthetic reflect my personality more."
        , image:"/images/screenshot.png",
        url:"/",
        code:"",
        alt: "Personal Website Screenshot"
    },
    {
        id:3,
        title:"Fun Pixel Mirror",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"I made a 4-tone mirror that uses your webcam and varying text symbols as pixels!"
        , image:"/images/pixel_mirror.png",
        url:"https://editor.p5js.org/JLizardo019/full/H3ANvPjVs",
        code:"https://editor.p5js.org/JLizardo019/sketches/H3ANvPjVs",
        alt: "Personal Website Screenshot"
    }
]

export default function ProjectsPage() {
    useEffect(() => {

        if(document){
            let nav = document.getElementById("navbar");
            let proj = document.getElementById("text");
            let title = document.getElementById("title");
            nav.style.animation = "fadeInDown 1.5s";
            title.style.animation = "fadeInDown 1.5s";
            proj.style.animation = "fadeInUp 1.5s";
            
        }
    
    });

    return(
        <Layout>
            <Head>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-NPDX9RG0NH"></Script>
                <Script id="google-analytics">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-NPDX9RG0NH');`
                    }
                </Script>

                <title>Projects | Julie Lizardo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-png" href="/images/favicon.png"></link>
            </Head>
            <Container>
                <h2 id="title" className="mt-2 text-center text-4xl font-bold  text-gray-900">Projects</h2>

                <div id="text">
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
                </div>
            </Container>
        </Layout>
    );

}