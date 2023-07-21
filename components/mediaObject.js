import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";


export default function MediaObject({ title, alt, tools, url, image, code, descript}) {  
  
  return (<div className="lg:flex my-6 py-8">
        <div className="mb-4 w-2/4 :mb-0 sm:mr-4">
          
          <Image className="h-auto w-full" alt ={alt} src={image} width={2880} height={1548}></Image>
        </div>
        <div className="w-2/4">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="my-2">
            {descript}
          </p>
          {/* {tools.map((item) => (
                <Badge name={item}></Badge>
                
          ))} */}
        </div>
      </div>
    )
  }
  