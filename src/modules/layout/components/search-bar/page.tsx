"use client"

import { Search } from "lucide-react"
import { useState, type FormEvent } from "react"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}
const SearchBar = ({ placeholder = "Search...", onSearch, className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="h-10 w-full rounded-md border border-gray-300 text-black bg-white pl-10 pr-12 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        {/* <button type="submit" className="absolute inset-y-0 left-0 flex items-center pl-3" aria-label="Search">
          <Search className="h-4 w-4 text-gray-500" />
        </button> */}
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 hover:text-gray-700"
          aria-label="Search"
        >
          <Search className="h-6 w-6  text-orange-500" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar;