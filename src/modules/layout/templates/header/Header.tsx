import SearchBar from "@modules/layout/components/search-bar/page"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@lib/components/ui/dropdown-menu"
// import { DropdownMenu } from "radix-ui";
import { LocationEdit, MenuIcon, Phone, User } from "lucide-react"
// import CartButton from "../ui/cart-button";
import Link from "next/link"
import Image from "next/image"
import { categories } from "@lib/data/categories"
import { AnnouncemetBar } from "./announcement"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SideMenu from "@modules/layout/components/side-menu"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import { NavBar } from "./navBar"
import { Suspense } from "react"
import CartButton from "@modules/layout/components/cart-button"

const isLogedIn = false

// const NavBar =async () => {
//   const regions = await listRegions().then((regions: StoreRegion[]) => regions)
//   return (
//     <div className="  w-full bg-[var(--primary-blue)]">
//       {/* <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-blue-900"
//       > */}
//       <div className="container mx-auto hidden md:flex justify-center items-center p-5">
//         <div className="flex flex-grow w-20 justify-start items-center  text-white gap-2 text-xl ">
//           <DropdownMenu>
//             <DropdownMenuTrigger className="flex items-center gap-2 nav-text transition-colors">
//               <MenuIcon className="h-6 w-6" />
//               All Categories
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               {/* {categories.map((category, index) => (
//                 <DropdownMenuItem key={index}>
//                   <Link href="/"> {category.name}</Link>
//                 </DropdownMenuItem>
//               ))} */}
//             </DropdownMenuContent>
//           </DropdownMenu>
//           <ul className="flex justify-center items-center ml-7  gap-3 ">
//             <li className="list-none nav-text">
//               <Link href="/shop">Shop</Link>
//             </li>
//           </ul>
//         </div>
//         {/* <div className="flex flex-grow  items-center justify-start  text-xl font-bold">

//       </div> */}
//         <div className="flex-grow w-20  flex items-center justify-end  gap-4 md:gap-6">
//           <div className="flex justify-end items-center  text-white gap-5 ">
//             <div className="flex items-center justify-center nav-text">
//               <LocationEdit className="h-6 w-6" />
//               Track your order
//             </div>
//             <div className="flex items-center justify-center nav-text">
//               {" "}
//               <Phone className="h-6 w-6" />
//               +94 11 2 866 676
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </motion.div> */}
//     </div>
//   )
// }

const Header = () => {
  return (
    <header className=" bg-white shadow-md text-white">
      <AnnouncemetBar />
      <div className="w-full container mx-auto px-4 py-2 md:py-4 flex items-center justify-between gap-4">
        {/* <div className=""> */}
        <div className="flex-grow w-15 items-start gap-2  text-black text-xl font-bold">
          {/* <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              className=" "
              width={150}
              height={100}
              // fill
            />
          </Link> */}
          <LocalizedClientLink
            href="/"
            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            data-testid="nav-store-link"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              className=" "
              width={150}
              height={100}
              // fill
            />
          </LocalizedClientLink>
          {/* <Link href="/">
            <div className="relative w-[100px] h-[50px] sm:w-[100px] sm:h-[40px] lg:w-[150px] lg:h-[50px]">
              <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
            </div>
          </Link> */}
        </div>

        <div className="flex-shrink   hidden md:block flex-1">
          <SearchBar />
        </div>
        <div className="flex-grow w-15 text-black flex items-center justify-end pl-7 md:pl-1 gap-5 md:gap-4">
          {/* <CartButton itemCount={30} /> */}

          {/* {isLogedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 hover:text-purple-700 transition-colors">
                <User className="h-6 w-6" />
                User
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>My Orders</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <div className="flex items-center gap-2  hover:text-purple-700 transition-colors">
                <User className="h-6 w-6" />
                <span>Log In</span>
              </div>
            </Link>
          )} */}
          <LocalizedClientLink
            className="hover:text-ui-fg-base"
            href="/account"
            data-testid="nav-account-link"
          >
            <div className="flex">
              <User className="h-6 w-6" />
              Account
            </div>
          </LocalizedClientLink>
          {/* 
          <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div> */}
          <Suspense
            fallback={
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex gap-2"
                href="/cart"
                data-testid="nav-cart-link"
              >
                Cart (0)
              </LocalizedClientLink>
            }
          >
            <CartButton />
          </Suspense>

          {/*          
          <div className="hidden md:block"> 
        </div> */}
          {/* </div> */}
        </div>
      </div>
      {/* <div className=" bg-[var(--primary-blue)] md:hidden w-full p-3">
        <div className="md:hidden container flex items-center justify-between gap-5">
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:text-[var(--primary-orange)] transition-colors">
              <MenuIcon className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Categories</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {categories.map((category, index) => (
                        <DropdownMenuItem key={index}>
                          <Link href="/"> {category.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/shop">shop</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <SearchBar />
        </div>
      </div> */}
      <NavBar />
    </header>
  )
}

export default Header
