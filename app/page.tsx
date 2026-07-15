import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock3, Sparkles, UtensilsCrossed } from "lucide-react"
import SearchForm from "@/components/search-form"

const recipes = [
  { slug: "orange-cake", title: "Sunshine Orange Cake", description: "Tender, citrusy, and made for sharing.", time: "40 min", level: "Easy", image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/o-GIziC1gmaUQvCPOQ8KEVsy2Fq7Ifec.jpg" },
  { slug: "fruit-salad", title: "Summer Fruit Salad", description: "Juicy seasonal fruit with a bright orange-honey dressing.", time: "15 min", level: "No cook", image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/fruit-FH9nSPjolOvp2hb9p2Qqq8fgI3pHZU.webp" },
  { slug: "orange-chicken", title: "Weeknight Orange Chicken", description: "A sticky, tangy family favorite that beats takeout.", time: "50 min", level: "Medium", image: "https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/chicken-SF6Nbi5Yzt49VwrEfjhtBhDNiXafT2.jpg" },
]

export default function Home() {
  return (
    <div>
      <section className="hero-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> Fresh from the family recipe box</span>
            <h1>Good food.<br /><em>Bright flavors.</em></h1>
            <p>Approachable recipes, passed down and perfected for real kitchens, busy weeknights, and slow Sunday tables.</p>
            <div className="hero-actions">
              <Link href="/gallery" className="button button-primary">Explore recipes <ArrowRight size={18} /></Link>
              <Link href="/about" className="text-link">Our story</Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image src={recipes[0].image} alt="Freshly baked orange cake" fill priority className="hero-image" sizes="(max-width: 768px) 100vw, 48vw" />
            <div className="image-note"><span>Today’s favorite</span><strong>Sunshine Orange Cake</strong></div>
          </div>
        </div>
      </section>

      <section className="search-band">
        <div className="container search-band-inner">
          <div><span className="eyebrow dark"><UtensilsCrossed size={15} /> What are you craving?</span><h2>Find your next favorite</h2></div>
          <SearchForm />
        </div>
      </section>

      <section className="section container">
        <div className="section-heading"><div><span className="kicker">Reader favorites</span><h2>Recipes worth repeating</h2></div><Link href="/gallery" className="text-link">View all recipes <ArrowRight size={16} /></Link></div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <Link href={`/recipes/${recipe.slug}`} className="recipe-card" key={recipe.slug}>
              <div className="recipe-image"><Image src={recipe.image} alt="" fill className="card-photo" sizes="(max-width: 768px) 100vw, 33vw" /></div>
              <div className="recipe-content"><div className="recipe-meta"><span><Clock3 size={14} /> {recipe.time}</span><span>{recipe.level}</span></div><h3>{recipe.title}</h3><p>{recipe.description}</p><span className="card-link">Make this recipe <ArrowRight size={16} /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="newsletter container">
        <div><span className="kicker light">A little sunshine in your inbox</span><h2>New recipes. No clutter.</h2><p>Get one cozy, kitchen-tested recipe and a handful of useful tips each week.</p></div>
        <form className="newsletter-form"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required placeholder="you@example.com" /><button type="submit">Join the table <ArrowRight size={17} /></button></form>
      </section>
    </div>
  )
}
