import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">The page you are looking for doesn't exist or has been moved.</p>
        <Button asChild className="bg-orange-500 hover:bg-orange-600">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
