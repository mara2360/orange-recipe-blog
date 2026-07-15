"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Mail, Phone, MapPin, Send, Upload, X, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const handleFileRemove = () => {
    setUploadedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setUploadedFile(null)
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you have a question about recipes, want to share your cooking experience, or are interested in
                collaborating with us, we're here to help. Fill out the form and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="h-5 w-5 text-orange-500" />}
                  title="Email"
                  detail="hello@theorangeblog.com"
                />
                <ContactInfo
                  icon={<Phone className="h-5 w-5 text-orange-500" />}
                  title="Phone"
                  detail="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={<MapPin className="h-5 w-5 text-orange-500" />}
                  title="Address"
                  detail="123 Citrus Lane, Orange Grove, CA 92866"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      rows={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photo">Attach a Photo (Optional)</Label>
                    <div className="mt-1 flex items-center">
                      <input
                        type="file"
                        id="photo"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="sr-only"
                      />
                      {!uploadedFile ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full flex items-center justify-center gap-2 border-dashed border-2 py-6 text-gray-500 hover:text-orange-500 hover:border-orange-500"
                        >
                          <Upload className="h-5 w-5" />
                          <span>Click to upload a photo</span>
                        </Button>
                      ) : (
                        <div className="w-full bg-orange-50 rounded-md p-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-700">
                            <ImageIcon className="h-5 w-5 text-orange-500" />
                            <span className="text-sm font-medium truncate max-w-[200px]">{uploadedFile.name}</span>
                            <span className="text-xs text-gray-500">({(uploadedFile.size / 1024).toFixed(0)} KB)</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={handleFileRemove}
                            className="text-gray-500 hover:text-red-500"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove file</span>
                          </Button>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      You can upload a JPG, PNG or GIF file (max. 5MB). This could be a photo of your cooking results or
                      a recipe you'd like us to feature.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FAQ
              question="How can I submit my own recipe?"
              answer="We love featuring recipes from our community! Please use the contact form above and put 'Recipe Submission' as the subject. Include your recipe details, and if possible, a photo of the finished dish."
            />
            <FAQ
              question="Do you offer cooking classes?"
              answer="Yes! We host virtual cooking classes once a month. Sign up for our newsletter to get notified about upcoming classes and registration details."
            />
            <FAQ
              question="Can I republish your recipes on my blog?"
              answer="Our recipes are protected by copyright. Please contact us for permission if you'd like to feature one of our recipes on your platform."
            />
            <FAQ
              question="How do I adjust recipes for dietary restrictions?"
              answer="Many of our recipes include notes on substitutions for common dietary restrictions. If you have specific questions about adapting a recipe, feel free to contact us directly."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode
  title: string
  detail: string
}) {
  return (
    <div className="flex items-start">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{detail}</p>
      </div>
    </div>
  )
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-orange-500 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
