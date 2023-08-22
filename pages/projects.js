import { useEffect } from 'react';

// import components
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import MediaObject from '../components/mediaObject';

//latest projects
const projects = [
    {
        id: 1,
        title:"Cog-Sci-DIY - NYU CREATE LAB",
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
        tools:[{name:'Next.js', id:"1"}, {name:'React.js', id:"2"}, {name:'Tailwind CSS', id:"3"}, {name:'Figma', id:"4"}, {name:'Adobe Suite', id:"5"}, {name:'Vercel', id:"6"}, {name:'Google Analytics', id:"7"}], 
        descript:"Tired of my previous website design, I built version 2.0! I wanted to include more playfulness to the front-end and have the asthetic reflect my personality more."
        , image:"/images/screenshot.png",
        url:"/",
        code:"",
        alt: "Personal Website Screenshot"
    },
    {
        id:11,
        title:"Dancing Pumpkin",
        tools:[{name:'Machine Learning', id:"5"}, {name:'p5.js', id:"1"}, {name:'ml5.js', id:"4"},{name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"A web app that allows users to become their own dancing pumpkin character by using ml5.js Posenet model to detect your body from your webcam and move the character on the canvas. The character scales according to the distance between the user and the camera by measuring the distance between the user's eyes. I reduced the noise introduced by the webcam by linear interpolation of the key points. Therefore, there is a slight lag in the responsiveness in order to make the movements look more smooth."
        , image:"/images/pumpkin.png",
        url:"https://dancing-pumpkin-character.glitch.me/ ",
        code:"https://github.com/JLizardo019/Dancing-Pumpkin-Character",
        alt: "Dancing Pumpkin"
    },
    {
        id:10,
        title:"Generative Art",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"Generative Art is a website and tool that allows users to generate art out of text. Each image that is produced is unique and irreproducible. To begin, users enter sentences or words on the text box on the right. As users type new letters, new shapes are drawn on the canvas. When the user is done typing, they have the option to clear the canvas or save the resulting image by clicking the appropriate buttons. There is also the option to customize the colors of the background and the shapes that are drawn. The default background color is black and the default shape is white."
        , image:"/images/ga.png",
        url:"https://jlizardo019.github.io/Generative-Art/",
        code:"https://github.com/JLizardo019/Generative-Art/",
        alt: "Generative Art"
    },
    {
        id:4,
        title:"Pendulum Hair",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"In this sketch, I created a happy, girl character with flowing hair. When you click and drag your mouse over the head from side to side, you can control the tilt of the character’s head. Each strand of hair acts as a pendulum swinging back and forth until it is at rest. I created multiple strands of hair by building a Hair class and instantiating multiple objects. To add a whimsical touch, I made the facial expression change while you are tilting the character’s head."
        , image:"/images/pendulum-hair.png",
        url:"https://editor.p5js.org/JLizardo019/full/wQ0obumMg",
        code:"https://editor.p5js.org/JLizardo019/sketches/wQ0obumMg",
        alt: "Pendulum Hair"
    }, 
    {
        id:3,
        title:"Custom Pixel Mirror",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"I made a 4-tone mirror that uses your webcam and varying text symbols as pixels! For best results, make sure you have bright lighting and a light background."
        , image:"/images/pixel_mirror.png",
        url:"https://editor.p5js.org/JLizardo019/full/H3ANvPjVs",
        code:"https://editor.p5js.org/JLizardo019/sketches/H3ANvPjVs",
        alt: "Custom Pixel Mirror"
    },
    {
        id:5,
        title:"Life in Color: ZigZag",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"Life in Color is a composition of 6 projects where I use the same color palette. ZigZag is a program that utilizes algorithmic design. It randomly draws lines on the canvas and keeps looping forever. Over time, the canvas becomes more and more dense with lines."
        , image:"/images/zig-zag.png",
        url:"https://editor.p5js.org/JLizardo019/full/vunaOzINw",
        code:"https://editor.p5js.org/JLizardo019/sketches/vunaOzINw",
        alt: "Zig Zag"
    },
    {
        id:6,
        title:"Life in Color: Friendly Caterpillar",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"Life in Color is a composition of 6 projects where I use the same color palette. Friendly Caterpillar is a program where the user controls a caterpillar on the screen. The caterpillar follows the mouse cursor around the screen. When the user clicks down on the mouse, it munches on the leaves in the background."
        , image:"/images/caterpillar.png",
        url:"https://editor.p5js.org/JLizardo019/full/-RylDsRX0Q",
        code:"https://editor.p5js.org/JLizardo019/sketches/-RylDsRX0Q",
        alt: "Friendly Caterpillar"
    },
    {
        id:7,
        title:"Life in Color: Scrambled Letters",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"Life in Color is a composition of 6 projects where I use the same color palette. Scrambled Letters is a program that allows the user to type into the canvas by using their keyboard. The program creates an illusion that the letters are falling onto the screen and piling up as more keys are typed. When the user clicks on the screen with their mouse, the existing letters are erased from the screen."
        , image:"/images/scrambled.png",
        url:"https://editor.p5js.org/JLizardo019/full/kw3bIaEei",
        code:"https://editor.p5js.org/JLizardo019/sketches/kw3bIaEei",
        alt: "Scrambled Letters"
    },
    {
        id:8,
        title:"Life in Color: Foilage",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"Life in Color is a composition of 6 projects where I use the same color palette. Foliage is a program that is designed to resemble a collection of leaves in an abstract way while also implementing algorithmic design. As the user clicks on the canvas with their mouse, more circles randomly appear on the screen."
        , image:"/images/foilage.png",
        url:"https://editor.p5js.org/JLizardo019/full/xh0vWtkT7",
        code:"https://editor.p5js.org/JLizardo019/sketches/xh0vWtkT7",
        alt: "Foilage"
    },
    {
        id:8,
        title:"Life in Color: Spotlight",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"Life in Color is a composition of 6 projects where I use the same color palette. Spotlight is a program that encourages the user to explore the canvas. It starts out with a spotlight and a message that reads “Look Around!” The spotlight moves along your cursor as you navigate the canvas. Once you find a word, it appears on the screen. Once all the words are located, the program reads “Discover Yourself. Don’t be afraid to explore!”"
        , image:"/images/spotlight.png",
        url:"https://editor.p5js.org/JLizardo019/full/SMOl2ObdP",
        code:"https://editor.p5js.org/JLizardo019/sketches/SMOl2ObdP",
        alt: "Spotlight"
    },
    {
        id:9,
        title:"Life in Color: Hollow",
        tools:[{name:'p5.js', id:"1"}, {name:'HTML', id:"2"}, {name:'CSS', id:"3"}], 
        descript:"Life in Color is a composition of 6 projects where I use the same color palette. Hollow is a program that uses 3-D shapes to create an abstract moving image. There are floating torus shapes that are rotating on various axises. The user can move their cursor to orient the light in the space as well as drag/zoom around the environment."
        , image:"/images/hollow.png",
        url:"https://editor.p5js.org/JLizardo019/full/YzYCSP6Sh",
        code:"https://editor.p5js.org/JLizardo019/sketches/YzYCSP6Sh",
        alt: "Hollow"
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
                <title>Projects | Julie Lizardo</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-png" href="/images/favicon.png"></link>
            </Head>
            <Container>
                <h2 id="title" className="mt-2 text-center text-4xl font-bold  text-gray-900">Projects</h2>
                {/* <p className='text-sm mt-3 text-gray-600'><strong>Note:</strong> my porfolio is currently under construction! I am purging old work and writing documentation for new projects I have made. This applies to Github and CodePen. Thank you for your patience!</p> */}
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