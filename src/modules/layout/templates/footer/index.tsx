// import { listCategories } from "@lib/data/categories"
// import { listCollections } from "@lib/data/collections"
// import { Text, clx } from "@medusajs/ui"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

// export default async function Footer() {
//   const { collections } = await listCollections({
//     fields: "*products",
//   })
//   const productCategories = await listCategories()

//   return (
//     <footer className="border-t border-ui-border-base w-full">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
//               Medusa Store
//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {productCategories && productCategories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul
//                   className="grid grid-cols-1 gap-2"
//                   data-testid="footer-categories"
//                 >
//                   {productCategories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//                 <li>
//                   <a
//                     href="https://github.com/medusajs"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     GitHub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://docs.medusajs.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com/medusajs/nextjs-starter-medusa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Source code
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
//           <Text className="txt-compact-small">
//             © {new Date().getFullYear()} Medusa Store. All rights reserved.
//           </Text>
//           <MedusaCTA />
//         </div>
//       </div>
//     </footer>
//   )
// }


import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
// import FooterFeature from "../footer-feature";

export default function Footer() {
  return (
    <div className="  flex flex-col w-full">
      {/* Purple header */}
      <div className="w-full bg-[var(--primary-orange)] h-1"></div>
      {/* <FooterFeature /> */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Logo, address, hotline, social */}
          <div className="flex flex-col space-y-6">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                className=" "
                width={150}
                height={100}
                // fill
              />
            </Link>

            <div className="text-sm text-purple-800">
              <p>No. 464C, Pannipitiya Road,</p>
              <p>Pelawatte, Battaramulla.</p>
            </div>

            <div>
              <p className="text-sm text-purple-800 font-semibold">HOTLINE</p>
              <p className="text-xl text-purple-800 font-bold">
                +94 11 2 866 676
              </p>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-purple-800 hover:text-purple-600">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-purple-800 hover:text-purple-600">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-purple-800 hover:text-purple-600">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-purple-800 hover:text-purple-600">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-purple-800 hover:text-purple-600">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Middle column - Action buttons */}
          <div className="flex flex-col space-y-4">
            <button className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
              <svg
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
              <span>Showroom Locator</span>
            </button>

            <button className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
              <svg
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
              <span>Showroom Login</span>
            </button>

            <button className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
              <svg
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.1 17H7.1C6.6 17 6.1 16.6 6.1 16C6.1 15.4 6.5 15 7.1 15H14.1C14.6 15 15.1 15.4 15.1 16C15.1 16.6 14.6 17 14.1 17ZM16.9 13H7.1C6.6 13 6.1 12.6 6.1 12C6.1 11.4 6.5 11 7.1 11H16.9C17.4 11 17.9 11.4 17.9 12C17.9 12.6 17.4 13 16.9 13ZM16.9 9H7.1C6.6 9 6.1 8.6 6.1 8C6.1 7.4 6.5 7 7.1 7H16.9C17.4 7 17.9 7.4 17.9 8C17.9 8.6 17.4 9 16.9 9Z"
                  fill="currentColor"
                />
              </svg>
              <span>Service Center Locator</span>
            </button>

            <button className="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
              <svg
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 8H4V6H20V8ZM20 18H4V12H20V18ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 13H7V15H12V13Z"
                  fill="currentColor"
                />
              </svg>
              <span>Track your Order</span>
            </button>
          </div>

          {/* Right column - Footer links */}
          <div className="grid grid-cols-3 gap-4">
            {/* About column */}
            <div className=" md:row-span-2">
              <h3 className="font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Subscribe Newsletter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help column */}
            <div className="">
              <h3 className="font-semibold text-lg mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    How To Buy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Warranty Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Return Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies column */}
            <div className="">
              <h3 className="font-semibold text-lg mb-4">Policies</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/policy/privacy"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policy/return-and-refund"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Return and Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policy/terms-and-conditions"
                    className="text-gray-700 hover:text-purple-800"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
                 <div className="">
              {/* <Link href="/service"> */}
                <Image
                  src="/customer-care.svg"
                  alt="Call for Service"
                  width={200}
                  height={300}
                  // fill
                  className="py-2 object-contain"
                />
              {/* </Link> */}
            </div>
            </div>
            {/* <div className=" col-span-3 flex items-center justify-centere">
                <Image
                  src="/customer-care.svg"
                  alt="Call for Service"
                  width={200}
                  height={300}
                  // fill
                  className="py-2 object-contain"
                />
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-full mt-7 border-t-2 border-[var(--primary-orange)]">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-3 sm:mb-0">
            Copyright © 2024 Click2Buy. All Rights Reserved.
          </div>

          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-3">We Are Accepting</span>
            <div className="flex space-x-2">
              <div className="h-8 w-12 bg-black rounded flex items-center justify-center">
                <Image
                  src="/assets/images/bankcards/payhere.png"
                  alt="Apple Pay"
                  width={30}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
              <div className="h-8 w-12 bg-white border border-gray-300 rounded flex items-center justify-center">
                <Image
                  src="/assets/images/bankcards/koko.png"
                  alt="Visa"
                  width={30}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
              <div className="h-8 w-12 bg-white border border-gray-300 rounded flex items-center justify-center">
                <Image
                  src="/assets/images/bankcards/visa.webp"
                  alt="Discover"
                  width={30}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

