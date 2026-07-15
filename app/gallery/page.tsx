"use client"
import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock3, Search, SlidersHorizontal } from "lucide-react"

const recipes = [
  { slug:"fruit-salad", title:"Summer Fruit Salad", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/fruit-FH9nSPjolOvp2hb9p2Qqq8fgI3pHZU.webp", description:"Seasonal fruit with a bright orange-honey dressing.", category:"Fresh", time:"15 min" },
  { slug:"orange-jello", title:"Orange Jello", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/jello-PeXe5AGTgl76UGsCAg7DOIMrfnNAow.jpg", description:"A nostalgic citrus dessert made for sharing.", category:"Dessert", time:"10 min" },
  { slug:"orange-cake", title:"Sunshine Orange Cake", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/o-GIziC1gmaUQvCPOQ8KEVsy2Fq7Ifec.jpg", description:"Tender, fragrant, and finished with fresh orange zest.", category:"Dessert", time:"40 min" },
  { slug:"orange-smoothie", title:"Strawberry Smoothie", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/smoothie-GUkRo4mi3ZKGVFLBS8kLq8tEiZQaSl.jpg", description:"Creamy berries, yogurt, and honey in five minutes.", category:"Breakfast", time:"5 min" },
  { slug:"orange-chicken", title:"Weeknight Orange Chicken", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/chicken-SF6Nbi5Yzt49VwrEfjhtBhDNiXafT2.jpg", description:"Sticky, tangy, and better than takeout.", category:"Dinner", time:"50 min" },
  { slug:"orange-marmalade", title:"Berry Marmalade", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/blue-XNFQ6p0QK6Sf7PMdmZOP15TwZTqc39.jpg", description:"Sweet-tart blueberry preserve for toast and pastries.", category:"Breakfast", time:"40 min" },
  { slug:"orange-cookies", title:"Soft Sugar Cookies", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/cookie-Mtckfo0vsN1xwx1Qk7wk71TtxcvrPN.webp", description:"Soft-centered classics with crisp golden edges.", category:"Dessert", time:"27 min" },
  { slug:"orange-sorbet", title:"Mango Sorbet", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/mango-umzUYwXACSto9XHEdsvdCKY8WkfQZ2.jpg", description:"A sunny, refreshing scoop with bright mango flavor.", category:"Dessert", time:"15 min" },
  { slug:"orange-glazed-salmon", title:"Honey Garlic Salmon", image:"https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/Orange%20Blog/Gallery/salmon-l7ba2H9lumaDQfowMmDsGeFsfBtnck.avif", description:"Flaky salmon with a glossy sweet-savory glaze.", category:"Dinner", time:"25 min" },
]
const categories=["All","Breakfast","Dinner","Dessert","Fresh"]

export default function GalleryPage(){
  const [category,setCategory]=useState("All"); const [query,setQuery]=useState("")
  const filtered=useMemo(()=>recipes.filter(r=>(category==="All"||r.category===category)&&(`${r.title} ${r.description}`.toLowerCase().includes(query.toLowerCase()))),[category,query])
  return <div className="collection-page">
    <section className="page-hero"><div className="container"><span className="eyebrow"><SlidersHorizontal size={15}/> The recipe collection</span><h1>Find something <em>delicious.</em></h1><p>Kitchen-tested favorites for quick mornings, cozy dinners, and every sweet moment in between.</p></div></section>
    <section className="container collection-tools">
      <div className="category-tabs" aria-label="Filter by category">{categories.map(c=><button key={c} className={category===c?"selected":""} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <label className="gallery-search"><Search size={18}/><span className="sr-only">Search recipes</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search recipes…"/></label>
    </section>
    <section className="container collection-results"><div className="results-line"><strong>{filtered.length} recipes</strong><span>Made with care, meant to be shared.</span></div>
      <div className="gallery-grid">{filtered.map((r,i)=><Link href={`/recipes/${r.slug}`} className={`gallery-card ${i===0?"featured-card":""}`} key={r.slug}><div className="gallery-photo"><Image src={r.image} alt="" fill className="card-photo" sizes="(max-width: 800px) 100vw, 33vw"/><span className="category-pill">{r.category}</span></div><div className="gallery-copy"><div className="recipe-meta"><span><Clock3 size={14}/>{r.time}</span></div><h2>{r.title}</h2><p>{r.description}</p><span className="card-link">View recipe <ArrowRight size={16}/></span></div></Link>)}</div>
      {filtered.length===0&&<div className="empty-state"><h2>No recipes found</h2><p>Try another search or category.</p></div>}
    </section>
  </div>
}
