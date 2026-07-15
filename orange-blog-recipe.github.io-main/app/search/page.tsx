"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"

// This would typically come from a database or API
const allRecipes = [
  {
    slug: "fruit-salad",
    title: "Fruit Salad",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/fruit-SU2dNgGVwDS3BZkUBVuX07VQYaNX3B.jpeg",
    description: "A refreshing mix of seasonal fruits with orange zest",
    tags: ["fruit", "quick", "salad"],
  },
  {
    slug: "orange-jello",
    title: "Orange Jello",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/jello-PeXe5AGTgl76UGsCAg7DOIMrfnNAow.jpg",
    description: "Jiggly, sweet orange-flavored gelatin dessert",
    tags: ["jello", "dessert", "orange"],
  },
  {
    slug: "orange-cake",
    title: "Orange Cake",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/o-GIziC1gmaUQvCPOQ8KEVsy2Fq7Ifec.jpg",
    description: "Moist cake infused with fresh orange juice and zest",
    tags: ["cake", "baking", "orange"],
  },
  {
    slug: "orange-smoothie",
    title: "Orange Smoothie",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/smoothie-GUkRo4mi3ZKGVFLBS8kLq8tEiZQaSl.jpg",
    description: "Creamy orange smoothie with yogurt and honey",
    tags: ["smoothie", "breakfast", "strawberry"],
  },
  {
    slug: "orange-chicken",
    title: "Orange Chicken",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/chicken-SF6Nbi5Yzt49VwrEfjhtBhDNiXafT2.jpg",
    description: "Tangy and sweet orange-flavored chicken",
    tags: ["chicken", "dinner", "orange"],
  },
  {
    slug: "orange-marmalade",
    title: "Berry Marmalade",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/blue-XNFQ6p0QK6Sf7PMdmZOP15TwZTqc39.jpg",
    description: "Sweet and tangy blueberry marmalade spread",
    tags: ["preserve", "breakfast", "blueberry"],
    featured: false,
  },
  {
    slug: "orange-cookies",
    title: "Sugar Cookies",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/cookie-Mtckfo0vsN1xwx1Qk7wk71TtxcvrPN.webp",
    description: "Soft and chewy sugar cookies",
    tags: ["cookies", "dessert", "sugar"],
    featured: false,
  },
  {
    slug: "orange-sorbet",
    title: "Mango Sorbet",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/mango-umzUYwXACSto9XHEdsvdCKY8WkfQZ2.jpg",
    description: "Refreshing frozen mango dessert",
    tags: ["sorbet", "frozen", "mango"],
    featured: false,
  },
  {
    slug: "orange-glazed-salmon",
    title: "Honey Garlic Glazed Salmon",
    image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/salmon-l7ba2H9lumaDQfowMmDsGeFsfBtnck.avif",
    description: "Salmon fillets with a sweet and spicy glaze",
    tags: ["main course", "honey", "seafood"],
    featured: false,
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<typeof allRecipes>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery)
    }
  }, [initialQuery])

  const performSearch = (searchQuery: string) => {
    setIsSearching(true)

    // Simulate a slight delay for visual feedback
    setTimeout(() => {
      const filteredResults = allRecipes.filter((recipe) => {
        const searchableText = `${recipe.title} ${recipe.description} ${recipe.tags.join(" ")}`.toLowerCase()
        return searchableText.includes(searchQuery.toLowerCase())
      })

      setResults(filteredResults)
      setIsSearching(false)
    }, 300)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Update URL with search query
    const params = new URLSearchParams(searchParams)
    if (query) {
      params.set("q", query)
    } else {
      params.delete("q")
    }
    router.push(`/search?${params.toString()}`)

    performSearch(query)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <h1 className="text-3xl font-bold text-orange-500 mb-6">Recipe Search</h1>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
          <Input
            type="text"
            placeholder="Search recipes, ingredients, or tags..."
            className="pl-10 border-orange-300 focus:border-orange-500 focus:ring-orange-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-md hover:bg-orange-600 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {isSearching ? (
        <div className="text-center py-8">
          <div className="animate-pulse flex space-x-4 justify-center">
            <div className="rounded-full bg-orange-200 h-10 w-10"></div>
            <div className="flex-1 space-y-4 max-w-md">
              <div className="h-4 bg-orange-200 rounded w-3/4"></div>
              <div className="h-4 bg-orange-200 rounded w-1/2"></div>
            </div>
          </div>
          <p className="mt-4 text-gray-500">Searching recipes...</p>
        </div>
      ) : (
        <>
          {initialQuery && (
            <div className="mb-6">
              <p className="text-gray-600">
                {results.length === 0
                  ? `No results found for "${initialQuery}"`
                  : `Found ${results.length} result${results.length === 1 ? "" : "s"} for "${initialQuery}"`}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((recipe) => (
              <div
                key={recipe.slug}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <Link href={`/recipes/${recipe.slug}`}>
                  <div className="relative h-48">
                    <Image src={recipe.image || "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/orangeblog-DNGMs17OV4SRbfBoEoApaDJrEGifbm.png"} alt={recipe.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-orange-500 mb-2">{recipe.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{recipe.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {recipe.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <span className="text-orange-500 font-medium">View Recipe →</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {initialQuery && results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl mb-4">No recipes found matching your search.</p>
              <p className="text-gray-600">Try searching for different keywords or browse our recipe categories.</p>
            </div>
          )}

          {!initialQuery && (
            <div className="text-center py-12">
              <p className="text-xl mb-4">Enter a search term to find delicious recipes!</p>
              <p className="text-gray-600">
                Try searching for ingredients, dish names, or recipe types like "dessert" or "healthy".
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
