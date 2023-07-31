import Head from 'next/head';
import Link from 'next/link';

// import components
import Layout from '../components/layout';
import Container from '../components/container';


export default function CurriculumPage() {

    return(
        <>
            <Head>
                    <title>Curriculum</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="icon" type="image/x-png" href="/images/favicon.png"></link>
            </Head>
            <Layout>
                <Container>
                    <h2 className="mt-2 text-center text-5xl font-bold  text-gray-900">Curriculum</h2>
{/* make the h4 bars yellow */}
                    <h4 className='bg-[var(--c1)] p-2 rounded-lg text-2xl mt-8 font-bold text-gray-900'>New York University</h4>
                        <Link target="_blank" href="https://cs.nyu.edu/courses/spring23/CSCI-UA.0002-005/"><p className="mt-12 text-xl font-semibold squiggle hover:text-[var(--c2)]">CSCI-UA.0002 Introduction to Computer Programming</p></Link>   
                        <p className='mt-6 text-xl leading-8 text-gray-600' >(4 credits) This course is designed to be an introduction to the fundamentals of computer programming, which is the foundation of Computer Science. Students will design, write and debug computer programs using Python. No knowledge of programming is assumed.</p>
                 
                        <Link target="_blank" href="https://cs.nyu.edu/courses/spring23/CSCI-UA.0004-005/"><p className="mt-12 text-xl font-semibold squiggle hover:text-[var(--c2)]">CSCI-UA.0004 Introduction to Web Design and Computer Principles</p></Link>   
                        <p className='mt-6 text-xl  text-gray-600 leading-8'>(4 credits) This course introduces students to both the practice of web design and the basic principles of computer science. The practice component of the course covers not only web design but also current graphics and software tools. The principles section includes an overview of hardware and software, the history of computers, and a discussion of the impact of computers and the internet. No knowledge of programming is assumed.</p>
                 
                        <Link target="_blank" href="https://itp.nyu.edu/ima/courses/code/"><p className="mt-12 text-xl font-semibold squiggle hover:text-[var(--c2)]">IMNY-UT.0001 Code!</p></Link>   
                        <p className='mt-6 text-xl leading-8 text-gray-600'>(2 credits) This online 7 week course focuses on the fundamentals of computer programming (variables, conditionals, iteration, functions & objects) using JavaScript. In particular it leverages the p5.js creative computing environment which is oriented towards visual displays on desktops, laptops, tablets or smartphones. The course is designed for computer programming novices.</p>
                        <p className='mt-8 text-xl leading-8 text-gray-600'>What can computation add to human communication? You will gain a deeper understanding of the possibilities of computation–– possibilities that will augment and enhance the perspectives, abilities and knowledge you bring from your field of study (e.g. art, design, humanities, sciences, engineering). At first it may feel foreign, as foreign as learning a new language or way of thinking. But soon, once you get some basic skills under your belt, you’ll be able to make projects that reflect your own interests and passions.</p>                    
                 
                        <Link target="_blank" href="https://itp.nyu.edu/ima/courses/code-2/"><p className="mt-12 text-xl font-semibold squiggle hover:text-[var(--c2)]">IMNY-UT.0002 Code! 2</p></Link>   
                        <p className='mt-6 text-xl leading-8 text-gray-600'>(2 credits) This online 7 week course focuses on applying fundamentals of computer programming in JavaScript to interactive media projects. In particular, it leverages the p5.js creative computing environment which is oriented towards visual displays on desktops, laptops, tablets or smartphones. The course is designed for students with a foundation level understanding of programming in JavaScript with the p5.js library. The Code! course (or equivalent) is a prerequisite.</p>
                 

                    
                    <h4 className='bg-[var(--c1)] p-2 rounded-lg text-2xl mt-16 font-bold text-gray-900'>All Star Code</h4>
                        <Link href="https://allstarcode.org/" target="blank"><p className="mt-12 text-xl font-semibold squiggle hover:text-[var(--c2)]">Machine Learning with ml5.js Lesson</p></Link>   
                        <p className='mt-6 text-xl leading-8 text-gray-600'>Ever asked Alexa to play your favorite song? Asked Siri about the current weather? Maybe you watched a recommended TV show from Netflix last night. These are all examples of Machine Learning algorithms working in your day-to-day life! Machine Learning, a subset of artificial intelligence using datasets to learn over time, is a way for computers to teach themselves a concept without explicit programming. Get a taste of how you can build your own applications using Machine Learning algorithms!</p>
                        
                        <iframe className="mx-auto my-4 w-full h-[40rem]" width="560" height="315" src="https://www.youtube.com/embed/s8Q5K7NR6V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <Link href="https://www.crackthecode.zone" target="_blank"><p className="mt-12 text-xl font-semibold squiggle hover:text-[var(--c2)]">Crack the Code: Binary Numbers Lesson</p></Link>   
                        <p className='mt-6 text-xl leading-8 text-gray-600'>Crack the Code offers an All Star Code coding challenge in three parts and will help users fast track their applications in the admissions process for the 2022 Summer Intensive. Each challenge consists of a video lesson and a series of questions. I designed and recorded the second lesson in the series on binary numbers.</p>
                            <iframe className="mx-auto my-4 w-full h-[40rem]" width="560" height="315" src="https://www.youtube-nocookie.com/embed/48h0KTxUxyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        

                </Container>
            </Layout>
        </>
    );

}