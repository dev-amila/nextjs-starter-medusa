import SideMenu from "@modules/layout/components/side-menu"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import Link from "next/link"

export const NavBar =async () => {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
  return (
    <div className="  w-full bg-[var(--primary-blue)]">
    
      <div className="container mx-auto md:flex justify-center items-center p-5">
        <div className="flex flex-grow w-20 justify-start items-center  text-white gap-2 text-xl ">
             <SideMenu regions={regions} />
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 nav-text transition-colors">
              <MenuIcon className="h-6 w-6" />
              All Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category, index) => (
                <DropdownMenuItem key={index}>
                  <Link href="/"> {category.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}
          <ul className="flex justify-center items-center ml-7  gap-3 ">
            <li className="list-none nav-text">
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>
   
        <div className="flex-grow w-20  flex items-center justify-end  gap-4 md:gap-6">
          <div className="flex justify-end items-center  text-white gap-5 ">
            {/* <div className="flex items-center justify-center nav-text">
              <LocationEdit className="h-6 w-6" />
              Track your order
            </div>
            <div className="flex items-center justify-center nav-text">
              {" "}
              <Phone className="h-6 w-6" />
              +94 11 2 866 676
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}