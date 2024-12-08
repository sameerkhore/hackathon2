import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LatestProducts() {
  const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: "$42.00",
      image: "/image 23.svg",
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      price: "$42.00",
      image: "/image 15.png",
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      price: "$42.00",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Comfort Handy Craft",
      price: "$42.00",
      image: "/image 3.svg",
    },
    {
      id: 5,
      name: "Comfort Handy Craft",
      price: "$42.00",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      price: "$42.00",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold">Latest Products</h2>
        <Tabs defaultValue="new-arrival" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto">
            <TabsTrigger value="new-arrival">New Arrival</TabsTrigger>
            <TabsTrigger value="best-seller">Best Seller</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="special-offer">Special Offer</TabsTrigger>
          </TabsList>
          <TabsContent value="new-arrival" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.price}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

