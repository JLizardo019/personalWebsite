import Link from "next/link";

  export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2023 Julie Lizardo. All rights reserved. Icons from <Link className="underline hover:no-underline" href="https://icons8.com/" target="_blank">Icon8</Link>.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  