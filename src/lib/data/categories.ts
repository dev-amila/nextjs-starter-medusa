import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getCacheOptions } from "./cookies"

export const listCategories = async (query?: Record<string, any>) => {
  const next = {
    ...(await getCacheOptions("categories")),
  }

  const limit = query?.limit || 100

  return sdk.client
    .fetch<{ product_categories: HttpTypes.StoreProductCategory[] }>(
      "/store/product-categories",
      {
        query: {
          fields:
            "*category_children, *products, *parent_category, *parent_category.parent_category",
          limit,
          ...query,
        },
        next,
        cache: "force-cache",
      }
    )
    .then(({ product_categories }) => product_categories)
}

export const getCategoryByHandle = async (categoryHandle: string[]) => {
  const handle = `${categoryHandle.join("/")}`

  const next = {
    ...(await getCacheOptions("categories")),
  }

  return sdk.client
    .fetch<HttpTypes.StoreProductCategoryListResponse>(
      `/store/product-categories`,
      {
        query: {
          fields: "*category_children, *products",
          handle,
        },
        next,
        cache: "force-cache",
      }
    )
    .then(({ product_categories }) => product_categories[0])
}


export const categories = async (categoryId: string) => {
  return  [
    {
      name: "Smartphones",
      icon: "Smartphones.svg",
      products: "500+ Products",
      bgColor: "bg-blue-100",
    },
    {
      name: "Laptops & PCs",
      icon: "laptop and pc.svg",
      products: "300+ Products",
      bgColor: "bg-indigo-100",
    },
    {
      name: "TVs & Displays",
      icon: "tvs.svg",
      products: "200+ Products",
      bgColor: "bg-purple-100",
    },
    {
      name: "Audio & Speakers",
      icon: "speakers.svg",
      products: "250+ Products",
      bgColor: "bg-red-100",
    },
    {
      name: "Smartwatches",
      icon: "smartwatches.svg",
      products: "150+ Products",
      bgColor: "bg-green-100",
    },
    {
      name: "Kitchen Appliances",
      icon: "kitchen items.svg",
      products: "350+ Products",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Gaming",
      icon: "gaming.svg",
      products: "200+ Products",
      bgColor: "bg-violet-100",
    },
    {
      name: "Cameras",
      icon: "camera.svg",
      products: "100+ Products",
      bgColor: "bg-emerald-100",
    },
    {
      name: "Smart Home",
      icon: "smart home.svg",
      products: "180+ Products",
      bgColor: "bg-cyan-100",
    },
    {
      name: "Accessories",
      icon: "accessories.svg",
      products: "400+ Products",
      bgColor: "bg-amber-100",
    },
  ]
}