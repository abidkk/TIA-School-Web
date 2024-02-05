import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import LogoMain from "./LogoMain"
import Link from "next/link"
import { Menu } from "lucide-react"

export function SheetComp() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-green-200 border border-green-100 "> <Menu  /> </Button>
     
      </SheetTrigger>
      <SheetContent>

        <div className="bg-green-900 p-2 text-center mt-8 mx-auto flex gap-2 items-end ">
        <LogoMain/>
          <h1 className="text-white font-bold">The Islamic Academy</h1>
        </div>



        <div>
          <ul className="text-center py-4 ">
            <Link href={`/`} > <li className="bg-green-100 py-2 hover:shadow-md duration-500 my-1">Home</li> </Link>
            <Link href={`/about`} > <li className="bg-green-100 py-2 hover:shadow-md duration-500 my-1">About</li> </Link>
            <Link href={`/`} > <li className="bg-green-100 py-2 hover:shadow-md duration-500 my-1">Admisisons</li> </Link>
            <Link href={`/`} > <li className="bg-green-100 py-2 hover:shadow-md duration-500 my-1">Announcements</li> </Link>
            <Link href={`/`} > <li className="bg-green-100 py-2 hover:shadow-md duration-500 my-1">Contact Us</li> </Link>
            <Link href={`/`} > <li className="bg-green-100 py-2 hover:shadow-md duration-500 my-1">Gallery</li> </Link>
          </ul>
        </div>


      {/* icons */}
     <div> <Button className="w-full bg-green-800 text-white hover:bg-green-600 duration-500">Apply Now</Button></div>


      </SheetContent>
    </Sheet>
  )
}
