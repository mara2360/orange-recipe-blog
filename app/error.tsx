"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
            Try again
          </Button>
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
