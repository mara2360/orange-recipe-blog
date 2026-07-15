import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChefHat, Utensils, Heart, Award, Mail, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About The Orange</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sharing our family recipes and bringing joy to your kitchen since 2020.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                The Orange Recipe Blog began with a simple love for flavors and the versatility of ingredients in
                cooking. What started as a personal collection of family recipes has grown into a community of food
                enthusiasts sharing their love family dishes.
              </p>
              <p className="text-gray-700 mb-4">
                Founded by Sarah Johnson, a culinary arts graduate with a particular fondness for citrus, The Orange has
                evolved from a small personal blog to a comprehensive recipe resource visited by thousands of home cooks
                every month.
              </p>
              <p className="text-gray-700">
                Our mission is simple: to celebrate the vibrant flavors of both traditional and innovative
                recipes, and to create a welcoming community where food lovers can find inspiration for their next
                kitchen adventure.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/kitchen-appliances-in-professional-kitchen-in-a-mo-2023-11-27-05-13-33-utc-min-OTXf6odF52otNqbLcloZpo3ZZ7OsfG.jpg"
                  alt="Our kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<ChefHat className="h-10 w-10 text-orange-500" />}
              title="Quality Recipes"
              description="Every recipe is carefully tested in our kitchen to ensure it's delicious and reliable."
            />
            <ValueCard
              icon={<Utensils className="h-10 w-10 text-orange-500" />}
              title="Accessibility"
              description="We believe good food should be accessible to everyone, with simple ingredients and clear instructions."
            />
            <ValueCard
              icon={<Heart className="h-10 w-10 text-orange-500" />}
              title="Passion"
              description="Our love for cooking and sharing recipes drives everything we do at The Orange."
            />
            <ValueCard
              icon={<Award className="h-10 w-10 text-orange-500" />}
              title="Innovation"
              description="We're always exploring new flavors and techniques to keep our recipes fresh and exciting."
            />
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              image="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/istockphoto-1142230160-612x612-hy1hg8aEWdk68l1biPZTURYycKtG50.jpg"
              name="Sarah Johnson"
              role="Founder & Head Chef"
              bio="Sarah is a culinary arts graduate with a passion for citrus flavors. She founded The Orange in 2020 to share her family recipes and culinary experiments."
            />
            <TeamMember
              image="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/ChefByron-mpmOOavh4eODcQDgiWodBGTPNRZN1w.webp"
              name="Michael Chen"
              role="Recipe Developer"
              bio="Michael brings his international culinary experience to The Orange, specializing in fusion recipes that incorporate orange flavors into global cuisines."
            />
            <TeamMember
              image="https://j6vdsiddbdcswzdk.public.blob.vercel-storage.com/istockphoto-1389857295-612x612-i5SglpCiGFUWyTjOpe8adhlcm3TL10.jpg"
              name="Emily Rodriguez"
              role="Food Photographer"
              bio="Emily captures the beauty of our recipes through her lens. Her background in food styling ensures every dish looks as good as it tastes."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="Orange's recipes have transformed my family dinners. The orange chicken is now a weekly request from my kids!"
              author="Jessica T."
            />
            <Testimonial
              quote="As someone who's new to cooking, I appreciate how clear and easy-to-follow the instructions are. The step by step photos are so helpful."
              author="David M."
            />
            <Testimonial
              quote="I never knew oranges could be so versatile! The orange cake is now my go to dessert for dinner parties."
              author="Sophia L."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you! Reach out to us through
            any of the channels below.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <SocialLink icon={<Mail />} href="/contact" label="Email Us" />
            <SocialLink icon={<Instagram />} href="#" label="Instagram" />
            <SocialLink icon={<Facebook />} href="#" label="Facebook" />
            <SocialLink icon={<Twitter />} href="#" label="Twitter" />
          </div>
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-orange-500 text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

function TeamMember({
  image,
  name,
  role,
  bio,
}: {
  image: string
  name: string
  role: string
  bio: string
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-1">{name}</h3>
        <p className="text-gray-500 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  )
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="bg-orange-600 p-6 rounded-lg">
      <p className="italic mb-4">{quote}</p>
      <p className="font-semibold text-right">— {author}</p>
    </div>
  )
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  )
}
