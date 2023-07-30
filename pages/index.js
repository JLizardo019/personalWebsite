import Head from 'next/head';

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
        code:"#",
        alt: "Personal Website Screenshot"
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