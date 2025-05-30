import Link from "next/link"
import { ShoppingCart } from "lucide-react"

interface CartButtonProps {
  itemCount: number
}

export default function CartButton({ itemCount = 0 }: CartButtonProps) {
  return (
    <Link href="/cart" className="flex items-center gap-1 hover:text-purple-700 transition-colors">
      <div className="relative">
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
      </div>
      <span className="font-medium">Cart</span>
    </Link>
  )
}
