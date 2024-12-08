import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { id: 1, name: "Mini LCW Chair", price: 56.00 },
  { id: 2, name: "Mini LCW Chair", price: 56.00 },
  { id: 3, name: "Mini LCW Chair", price: 56.00 },
  { id: 4, name: "Mini LCW Chair", price: 56.00 },
]

export function TopCategories() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-indigo-900 mb-8">Top Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="relative group">
            <CardContent className="p-2">
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt={category.name}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </div>
              <h3 className="text-sm font-medium text-indigo-900 mt-2">{category.name}</h3>
              <p className="text-sm text-gray-500">${category.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

