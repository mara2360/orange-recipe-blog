"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
export default function SearchForm() { const router=useRouter(); const [query,setQuery]=useState(""); return <form className="search-form" onSubmit={e=>{e.preventDefault(); if(query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`)}}><Search size={20}/><label className="sr-only" htmlFor="recipe-search">Search recipes</label><input id="recipe-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by dish or ingredient…"/><button>Search</button></form> }
