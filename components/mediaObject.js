import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";


export default function MediaObject({ title, alt, tools, url, image, code, descript}) {  
  
  return (<div className="lg:flex my-6 py-8 blob-t">
        <div className="mb-4 lg:w-2/4 sm:mr-4">
          <Image className="h-auto w-full" alt ={alt} src={image} width={2880} height={1548} priority="true" ></Image>
        </div>
        <div className="lg:w-2/4">
          
          
          <div className="flex items-center justify-between">
            <h4 className="text-2xl text-gray-900 font-bold">{title}</h4>
            <div className="flex">
              {code == "" ? <></>: <Link className="mr-3 flex items-center hover:text-[var(--c2)]" href={code} target="_blank">
              <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>

              </Link>}

                 <Link href={url} target="_blank" className="hover:text-[var(--c2)]"> <svg className="w-8" stroke-width="1.5" x="0px" y="0px" width="64" height="64" viewBox="0 0 128 128">
              <path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
              </svg></Link>
            </div>
          </div>
          <p className="text-xl leading-8 my-10 text-gray-600">
            {descript}
          </p>
          {tools.map((item) => (
                <Badge key={item.id} name={item.name}></Badge>
                
          ))}
        </div>
      </div>
    )
  }
  