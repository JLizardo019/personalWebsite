import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/index.module.css';

// import components
import Layout from '../components/layout';
import MainHero from '../components/mainHero';
import Logos from '../components/logos';
import Container from '../components/container';
import MediaObject from '../components/mediaobject';
import Testimonials from '../components/testimonials'


//latest projects
const projects = [
    {
        id: 1,
        title:"Cog-Sci-DIY",
        tools:['Node.js', 'MySQL', 'React.js', 'SASS'], 
        descript:"!Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto."
        , image:"/images/OSU.png",
        url:"",
        code:"",
        alt: "Cog-Sci-DIY Screenshot"
    },
    {
        id:2,
        title:"Cog-Sci-DIY",
        tools:['Node.js', 'MySQL', 'React.js', 'SASS'], 
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
                    
                    {/* <MediaObject></MediaObject>
                    <MediaObject></MediaObject> */}
                </Container>
                {/* <div id={styles.firstBlock}>
                    <div className={styles.subBox}>
                        <div className={styles.left}>
                        <Image id={styles.headshot} src="/images/headshot.png" alt="profile pic" width={600} height={600}></Image>
                        </div>
                        <div className={styles.right}>
                            <h1>Hi! My name is Julie Lizardo. I am a web developer, educator, and digital creative.</h1>
                        </div>
                    </div>
                    <Link href="#teaching"><Image id={styles.arrow} src="/images/icons/arrow.png" alt="down arrow icon" width={70} height={70}></Image></Link>
                </div>

                <div className={styles.secondBlock} id="teaching">
                    <h1>Teaching</h1>
                    <h2>I have been teaching computer science for over 4+ years!</h2>
                    <div id={styles.schoolRow}>
                        <Link href="https://cs.nyu.edu/home/index.html" target="_blank"><Image className={styles.schools} src="/images/nyu2.png" alt="New York University" width={300} height={300}></Image></Link>
                        <Link href="https://allstarcode.org/" target="_blank"><Image className={styles.schools} src="/images/asc.webp" alt="All Star Code" width={300} height={300}></Image></Link>
                        <Link href="https://www.teachersleadtech.com/" target="_blank"><Image className={styles.schools} src="/images/tlt.png" alt="Teachers Lead Tech" width={300} height={300}></Image></Link>
                    </div>
                    <p>5/5 rating on rate my professor. Here is what my students have to say:</p>
                </div>

                <div id={styles.thirdBlock}>
                    <h1>My Latest Projects</h1>
                    <div className={styles.projects}>
                        <div className={styles.proImage}>
                            <Image src="/images/headshot.png" alt="profile pic" width={600} height={600}></Image>
                        </div>
                        <div className={styles.proText}>
                            <h3>OSU</h3>
                            <p>this a description of my project</p>
                            <button>Learn more</button>
                            <p>Built with: Node.js, SQL, React, SASS</p>
                        </div>
                    </div>
                    <div className={styles.projects}>
                        <div className={styles.proImage}>
                            <Image src="/images/headshot.png" alt="profile pic" width={600} height={600}></Image>
                        </div>
                        <div className={styles.proText}>
                            <h3>Time Sheet</h3>
                            <p>this a description of my project</p>
                            <button>Learn more</button>
                            <p>Built with: Node.js, SQL, React, SASS</p>
                        </div>
                    </div>
                    <div className={styles.projects}>
                        <div className={styles.proImage}>
                            <Image src="/images/headshot.png" alt="profile pic" width={600} height={600}></Image>
                        </div>
                        <div className={styles.proText}>
                            <h3>Time Sheet</h3>
                            <p>This a description of my project</p>
                            <button>Learn more</button>
                            <p>Built with: Node.js, SQL, React, SASS</p>
                        </div>
                    </div>

                </div> */}
            </Layout>

        </>
    );

}