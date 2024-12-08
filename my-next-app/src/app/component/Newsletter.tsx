import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="mb-16 bg-gray-100 py-16">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Get Leatest Update By Subscribe Our Newslater</h2>
        <div className="flex gap-2 justify-center">
          <Input placeholder="Enter your email" className="max-w-xs" />
          <Button className="bg-pink-500 hover:bg-pink-600">Shop Now</Button>
        </div>
      </div>
    </section>
  )
}

