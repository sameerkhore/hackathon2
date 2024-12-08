import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  { id: 1, name: "Cantilever chair", price: 42.00 },
  { id: 2, name: "Cantilever chair", price: 42.00 },
  { id: 3, name: "Cantilever chair", price: 42.00 },
  { id: 4, name: "Cantilever chair", price: 42.00 },
]

export function TrendingProducts() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-indigo-900 mb-8">Trending Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="border-none shadow-none">
            <CardContent className="p-2">
              <Image
                src="/placeholder.svg"
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-auto mb-2"
              />
              <h3 className="text-sm font-medium text-indigo-900">{product.name}</h3>
              <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

