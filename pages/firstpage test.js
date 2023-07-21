import { useState } from 'react';
// must always have this line above
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
// must always be in a folder called pages

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

// add export default so next.js knows that this is the main component
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      </Head>
      <Header title="Develop. Preview. Ship! 🚀" />
      <nav>
        <Link href="/about">About</Link>
        <Link href="/curriculum">Curriculum</Link>
        <Link href="/projects">Projects</Link>
      </nav>

      <Image src="/images/headshot.png" alt="profile pic" width={500} height={500}></Image>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}