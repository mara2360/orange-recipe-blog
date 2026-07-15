import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const recipes = {
  "fruit-salad": {
    title: "Summer Fruit Salad",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/fruit-FH9nSPjolOvp2hb9p2Qqq8fgI3pHZU.webp",
    prepTime: "15 mins",
    servings: "4",
    description: "A refreshing mix of seasonal fruits for the summer",
    ingredients: [
      "2 oranges, peeled and segmented",
      "1 apple, diced",
      "1 banana, sliced",
      "1 cup strawberries, halved",
      "1 cup grapes, halved",
      "2 tablespoons honey",
      "1 tablespoon fresh orange juice",
      "1 teaspoon orange zest",
    ],
    instructions: [
      "Prepare all the fruits by washing, peeling, and cutting them as needed.",
      "In a large bowl, combine all the prepared fruits.",
      "In a small bowl, whisk together honey, orange juice, and orange zest.",
      "Pour the dressing over the fruits and gently toss to coat.",
      "Refrigerate for at least 30 minutes before serving to allow flavors to meld.",
      "Serve chilled and enjoy!",
    ],
  },
  "orange-jello": {
    title: "Orange Jello",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/jello-PeXe5AGTgl76UGsCAg7DOIMrfnNAow.jpg",
    prepTime: "10 mins | 4 hrs chilling",
    servings: "6",
    description: "Jiggly, sweet orange-flavored gelatin dessert",
    ingredients: [
      "2 packages (3 oz each) orange-flavored gelatin",
      "2 cups boiling water",
      "1 cup cold orange juice",
      "1 cup cold water",
      "Orange slices for garnish (optional)",
    ],
    instructions: [
      "In a large bowl, dissolve gelatin in boiling water, stirring for about 2 minutes until completely dissolved.",
      "Add cold orange juice and cold water, stir well.",
      "Pour into a serving bowl or individual dessert cups.",
      "Refrigerate for at least 4 hours, or until firm.",
      "Garnish with orange slices before serving if desired.",
    ],
  },
  "orange-cake": {
    title: "Orange Cake",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/o-GIziC1gmaUQvCPOQ8KEVsy2Fq7Ifec.jpg",
    prepTime: "10 mins prep | 30 mins baking | 1 hr cooling",
    servings: "12",
    description: "Moist cake infused with fresh orange juice and zest",
    ingredients: [
      "2 cups all-purpose flour",
      "1 1/2 cups granulated sugar",
      "1 teaspoon baking powder",
      "1/2 teaspoon baking soda",
      "1/2 teaspoon salt",
      "3 large eggs",
      "3/4 cup vegetable oil",
      "1 cup fresh orange juice",
      "2 tablespoons orange zest",
      "1 teaspoon vanilla extract",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour a 9-inch round cake pan.",
      "In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.",
      "In another bowl, beat eggs, then add oil, orange juice, orange zest, and vanilla extract.",
      "Add the wet ingredients to the dry ingredients and mix until just combined.",
      "Pour batter into the prepared pan and bake for 40-45 minutes, or until a toothpick inserted in the center comes out clean.",
      "Allow to cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.",
      "Optionally, top with orange glaze or dust with powdered sugar before serving.",
    ],
  },
  "orange-smoothie": {
    title: "Strawberry Smoothie",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/smoothie-GUkRo4mi3ZKGVFLBS8kLq8tEiZQaSl.jpg",
    prepTime: "5 mins",
    servings: "2",
    description: "Creamy strawberry smoothie with yogurt and honey",
    ingredients: [
      "1 1/2 cup of fresh or frozen strawberries",
      "1 banana cut in chunks",
      "1/2 cup of strawberry Greek yogurt",
      "1 tablespoon honey",
      "1/2 teaspoon vanilla extract",
      "1 cup of low fat milk",
    ],
    instructions: [
      "Place all ingredients in a blender.",
      "Blend on high speed until smooth and creamy.",
      "Pour into glasses, serve immediately, and enjoy!",
    ],
  },
  "orange-chicken": {
    title: "Orange Chicken",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/chicken-SF6Nbi5Yzt49VwrEfjhtBhDNiXafT2.jpg",
    prepTime: "30 mins prep | 20 mins cooking",
    servings: "4",
    description: "Tangy and sweet orange-flavored chicken",
    ingredients: [
      "1.5 lbs boneless, skinless chicken breasts, cut into 1-inch pieces",
      "1/2 cup cornstarch",
      "1/4 cup flour",
      "1/2 teaspoon salt",
      "1/4 teaspoon pepper",
      "2 tablespoons vegetable oil",
      "For the sauce:",
      "1 cup orange juice",
      "1/4 cup sugar",
      "2 tablespoons rice vinegar",
      "2 tablespoons soy sauce",
      "1/4 teaspoon red pepper flakes",
      "1 tablespoon orange zest",
      "2 cloves garlic, minced",
      "1 teaspoon ginger, grated",
      "1 tablespoon cornstarch mixed with 2 tablespoons water",
      "Green onions and sesame seeds for garnish",
    ],
    instructions: [
      "In a bowl, mix together cornstarch, flour, salt, and pepper.",
      "Coat chicken pieces in the cornstarch mixture.",
      "Heat oil in a large skillet over medium-high heat.",
      "Cook chicken pieces until golden and cooked through, about 7-8 minutes. Remove and set aside.",
      "In the same skillet, add orange juice, sugar, rice vinegar, soy sauce, red pepper flakes, orange zest, garlic, and ginger.",
      "Bring to a simmer and cook for 3-4 minutes.",
      "Stir in the cornstarch-water mixture and cook until the sauce thickens, about 1-2 minutes.",
      "Return the chicken to the skillet and toss to coat with the sauce.",
      "Garnish with green onions and sesame seeds before serving.",
      "Serve with rice and enjoy!",
    ],
  },
  "orange-marmalade": {
    title: "Berry Marmalade",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/blue-XNFQ6p0QK6Sf7PMdmZOP15TwZTqc39.jpg",
    prepTime: "10 mins prep | 30 mins cooking",
    servings: "7 cups",
    description: "Sweet and tart blueberry marmalade spread",
    ingredients: [
      "1 medium oranges",
      "1 medium lemon",
      "3/4 cups of water",
      "5 cups of granulated sugar",
      "3 cups of crushed blueberries",
      "1 pouch of fruit pectin",
    ],
    instructions: [
      "Remove the peels from the oranges and lemons.",
      "Place shredded peel in large saucepan adn ad 3/4 cup water. Bring to a boil and then simmer, cover for 10 minutes. Stir ocasionally.",
      "Remove white pith from the orange and lemon and discard. Squeeze the juice from the lemon & orange and add to the pan. Chop the remaining lemon and orange pulp, discarding the seeds",
      "Add the pulp together with 3 cups crushed blueberries to the pan and cover & simmer for a further 12 minutes.",
      "Add 5 cups sugar. Bring to a full rolling boil. Boil hard for 1 minute, stirring constantly.",
      "Remove from the heat and immediately stir in 1 pouch of fruit pectin. Skim off the foam, stir and skim for a further 7 minutes.",
      "Ladle into hot sterilized jars and seal at once.",
    ],
  },
  "orange-cookies": {
    title: "Sugar Cookies",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/cookie-Mtckfo0vsN1xwx1Qk7wk71TtxcvrPN.webp",
    prepTime: "15 mins prep | 12 mins baking",
    servings: "24 cookies",
    description: "Soft and chewy sugar cookies",
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "1 teaspoon baking powder",
      "1/2 teaspoon salt",
      "1 cup unsalted butter, softened",
      "1 cup granulated sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.",
      "In a medium bowl, whisk together flour, baking powder, and salt.",
      "In a large bowl, cream together butter and sugar until light and fluffy.",
      "Beat in eggs one at a time, then stir in vanilla extract.",
      "Gradually blend in the dry ingredients until just combined.",
      "Drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart.",
      "Bake for 10-12 minutes, or until edges are lightly golden.",
      "Allow cookies to cool on baking sheets for 5 minutes before transferring to wire racks to cool completely.",
    ],
  },
  "orange-sorbet": {
    title: "Mango Sorbet",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/mango-umzUYwXACSto9XHEdsvdCKY8WkfQZ2.jpg",
    prepTime: "15 mins prep | 4 hrs freezing",
    servings: "6",
    description: "Refreshing frozen mango dessert",
    ingredients: ["2 cups of mango juice", "1 cup water", "3/4 cup granulated sugar", "1 tablespoon lemon juice"],
    instructions: [
      "In a saucepan, combine water and sugar. Bring to a boil, stirring until sugar dissolves completely.",
      "Remove from heat and let the syrup cool completely.",
      "Stir in mango juice and lemon juice.",
      "Pour the mixture into a shallow metal pan and freeze for 2 hours.",
      "Remove from freezer and use a fork to scrape and break up the partially frozen mixture.",
      "Return to freezer and freeze for another 2 hours, scraping with a fork every 30 minutes to create a granular texture.",
      "Alternatively, if using an ice cream maker, chill the mixture thoroughly and then process according to manufacturer's instructions.",
      "Transfer to an airtight container and freeze until firm, about 2 hours.",
      "Let sorbet sit at room temperature for 5 minutes before serving to soften slightly.",
    ],
  },
  "orange-glazed-salmon": {
    title: "Honey Garlic Glazed Salmon",
    image:
      "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/salmon-l7ba2H9lumaDQfowMmDsGeFsfBtnck.avif",
    prepTime: "10 mins prep | 15 mins cooking",
    servings: "4",
    description: "Salmon fillets with a sweet and spicy glaze",
    ingredients: [
      "4 salmon fillets (about 6 oz each)",
      "Salt and pepper to taste",
      "1 tablespoon olive oil",
      "For the glaze:",
      "2 tablespoons honey",
      "2 tablespoons soy sauce",
      "1 tablespoon Dijon mustard",
      "2 cloves garlic, minced",
      "1 teaspoon orange zest",
      "1/4 teaspoon red pepper flakes (optional)",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Season salmon fillets with salt and pepper.",
      "In a small saucepan, combine honey, soy sauce, Dijon mustard, garlic, orange zest, and red pepper flakes if using.",
      "Bring to a simmer over medium heat and cook for 5-7 minutes until slightly thickened.",
      "Heat olive oil in an oven-safe skillet over medium-high heat.",
      "Sear salmon fillets skin-side down for 2-3 minutes until golden.",
      "Brush salmon with half of the glaze and transfer the skillet to the preheated oven.",
      "Bake for 8-10 minutes, or until salmon is cooked through and flakes easily with a fork.",
      "Brush with remaining glaze before serving.",
      "Garnish with fresh parsley and serve with your favorite sides.",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(recipes).map((slug) => ({ slug }))
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const recipe = recipes[slug as keyof typeof recipes]

  if (!recipe) {
    return <div className="container mx-auto px-4 py-12 text-center">Recipe not found</div>
  }

  return (
    <div className="container recipe-detail-page">
      <Link href="/gallery" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to gallery
      </Link>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Full-width image container with expanded height */}
        <div className="w-full relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src={
              recipe.image ||
              "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Recipe/orange-pW0Gf6fPTrpnpaPumWG5n8QZSPd5SM.png" ||
              "/placeholder.svg"
            }
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={100}
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">{recipe.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Clock className="mr-2 h-5 w-5 text-orange-500" />
              <span>{recipe.prepTime}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="mr-2 h-5 w-5 text-orange-500" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          <p className="text-gray-700 mb-8">{recipe.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-orange-500 mt-2 mr-2"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-orange-500 text-white font-medium mr-3 shrink-0">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
