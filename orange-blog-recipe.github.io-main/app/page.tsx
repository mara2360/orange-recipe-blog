import Image from "next/image"
import Link from "next/link"
import SignUpForm from "@/components/sign-up-form"
import SearchForm from "@/components/search-form"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Orange</h1>
            <p className="text-xl mb-6">Orange you glad we didn't name our website banana?</p>
            <SignUpForm />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-full border-4 border-white p-0 overflow-hidden">
              <Image
                src="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/gallery-bZNH46dMn6bJffvEk37HGpXBrtd6mX.jpg"
                alt="Orange Logo"
                width={300}
                height={300}
                className="rounded-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-orange-100">
        <div className="container mx-auto px-4">
          <SearchForm />
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Our Favorite Orange Inspired Sweets!</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RecipeCard
              image="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/fruit-FH9nSPjolOvp2hb9p2Qqq8fgI3pHZU.webp"
              title="Fruit Salad"
              description="A refreshing mix of seasonal fruits with orange zest"
              slug="fruit-salad"
            />
            <RecipeCard
              image="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/jello-PeXe5AGTgl76UGsCAg7DOIMrfnNAow.jpg"
              title="Orange Jello"
              description="Jiggly, sweet orange-flavored gelatin dessert"
              slug="orange-jello"
            />
            <RecipeCard
              image="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/o-GIziC1gmaUQvCPOQ8KEVsy2Fq7Ifec.jpg"
              title="Orange Cake"
              description="Moist cake infused with fresh orange juice and zest"
              slug="orange-cake"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-orange-500 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <blockquote className="text-center text-xl md:text-2xl italic">
            "The ultimate goal is to be an interesting, useful, wholesome person. If you're successful on top of that,
            then you're way ahead of everybody."
            <footer className="mt-4 font-semibold">— Martha Stewart</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-orange-500 rounded-lg p-8 text-white text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">The time is now!</h3>
            <p className="mb-6">Sign up for delicious desserts and baked goods!</p>
            <SignUpForm buttonClassName="bg-white border-white text-orange-500 hover:bg-orange-100 hover:border-orange-100" />
          </div>
        </div>
      </section>
    </div>
  )
}

function RecipeCard({
  image,
  title,
  description,
  slug,
}: {
  image: string
  title: string
  description: string
  slug: string
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <Link href={`/recipes/${slug}`}>
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-orange-500 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4 flex justify-end">
            <span className="text-orange-500 font-medium">View Recipe →</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
