"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or API
const allRecipes = [
  {
    slug: "fruit-salad",
    title: "Summer Fruit Salad",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/fruit-FH9nSPjolOvp2hb9p2Qqq8fgI3pHZU.webp",
    description: "A refreshing mix of seasonal fruits for the summer",
    tags: ["fruit", "quick", "salad", "breakfast", "healthy"],
    featured: true,
  },
  {
    slug: "orange-jello",
    title: "Orange Jello",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/jello-PeXe5AGTgl76UGsCAg7DOIMrfnNAow.jpg",
    description: "Jiggly, sweet orange-flavored gelatin dessert",
    tags: ["jello", "dessert", "orange", "quick"],
    featured: true,
  },
  {
    slug: "orange-cake",
    title: "Orange Cake",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/o-GIziC1gmaUQvCPOQ8KEVsy2Fq7Ifec.jpg",
    description: "Moist cake infused with fresh orange juice and zest",
    tags: ["cake", "baking", "orange", "dessert"],
    featured: true,
  },
  {
    slug: "orange-smoothie",
    title: "Strawberry Smoothie",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/smoothie-GUkRo4mi3ZKGVFLBS8kLq8tEiZQaSl.jpg",
    description: "Creamy strawberry smoothie with yogurt and honey",
    tags: ["smoothie", "breakfast", "strawberry", "quick", "healthy"],
    featured: false,
  },
  {
    slug: "orange-chicken",
    title: "Orange Chicken",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/chicken-SF6Nbi5Yzt49VwrEfjhtBhDNiXafT2.jpg",
    description: "Tangy and sweet orange-flavored chicken",
    tags: ["chicken", "dinner", "orange", "main course"],
    featured: false,
  },
  {
    slug: "orange-marmalade",
    title: "Berry Marmalade",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/blue-XNFQ6p0QK6Sf7PMdmZOP15TwZTqc39.jpg",
    description: "Sweet and tangy blueberry marmalade spread",
    tags: ["preserve", "breakfast", "blueberry"],
    featured: false,
  },
  {
    slug: "orange-cookies",
    title: "Sugar Cookies",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/cookie-Mtckfo0vsN1xwx1Qk7wk71TtxcvrPN.webp",
    description: "Soft and chewy sugar cookies",
    tags: ["cookies", "dessert", "sugar", "baking"],
    featured: false,
  },
  {
    slug: "orange-sorbet",
    title: "Mango Sorbet",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/mango-umzUYwXACSto9XHEdsvdCKY8WkfQZ2.jpg",
    description: "Refreshing frozen mango dessert",
    tags: ["sorbet", "frozen", "mango", "dessert"],
    featured: false,
  },
  {
    slug: "orange-glazed-salmon",
    title: "Honey Garlic Glazed Salmon",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/salmon-l7ba2H9lumaDQfowMmDsGeFsfBtnck.avif",
    description: "Salmon fillets with a sweet and spicy glaze",
    tags: ["main course", "honey", "seafood", "dinner", "healthy"],
    featured: false,
  },
]

// Extract all unique tags from recipes
const allTags = Array.from(new Set(allRecipes.flatMap((recipe) => recipe.tags)))

// Define meal types for categorization
const mealTypes = ["breakfast", "lunch", "dinner", "dessert", "snack", "drink"]

export default function GalleryPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSelectedTags([])
  }

  const filteredRecipes =
    selectedTags.length > 0
      ? allRecipes.filter((recipe) => selectedTags.some((tag) => recipe.tags.includes(tag)))
      : allRecipes

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-orange-500 mb-2">Recipe Gallery</h1>
          <p className="text-gray-600 dark:text-gray-300">Browse our collection of delicious family recipes</p>
        </div>

        <div className="mt-4 md:mt-0">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            className="flex items-center gap-2 border-orange-300 text-orange-500"
          >
            <Filter size={16} />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>
      </div>

      {showFilters && (
        <div className="mb-8 p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Filter Recipes</h2>
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-orange-500 hover:text-orange-700"
              >
                Clear All
              </Button>
            )}
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Meal Type</h3>
            <div className="flex flex-wrap gap-2">
              {mealTypes.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer capitalize ${
                    selectedTags.includes(tag)
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "hover:bg-orange-100 dark:hover:bg-orange-900/30"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Ingredients & Characteristics</h3>
            <div className="flex flex-wrap gap-2">
              {allTags
                .filter((tag) => !mealTypes.includes(tag))
                .map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`cursor-pointer capitalize ${
                      selectedTags.includes(tag)
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "hover:bg-orange-100 dark:hover:bg-orange-900/30"
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      )}

      {selectedTags.length > 0 && (
        <div className="mb-6 flex items-center">
          <span className="text-sm text-gray-500 mr-2">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <Badge key={tag} className="bg-orange-500 hover:bg-orange-600 flex items-center gap-1 capitalize">
                {tag}
                <X size={14} className="cursor-pointer" onClick={() => toggleTag(tag)} />
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl mb-4">No recipes match your selected filters.</p>
          <Button onClick={clearFilters} className="bg-orange-500 hover:bg-orange-600">
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}

function RecipeCard({ recipe }: { recipe: (typeof allRecipes)[number] }) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <Link href={`/recipes/${recipe.slug}`} className="flex-grow flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {recipe.featured && (
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-600 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{recipe.description}</p>
          <div className="flex flex-wrap gap-1 mt-auto">
            {recipe.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 px-2 py-0.5 rounded-full capitalize"
              >
                {tag}
              </span>
            ))}
            {recipe.tags.length > 3 && <span className="text-xs text-gray-500">+{recipe.tags.length - 3} more</span>}
          </div>
        </div>
      </Link>
    </div>
  )
}
