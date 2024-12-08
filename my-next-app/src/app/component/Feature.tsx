import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      price: "$42.00",
      image: "/image 1168.png",
    },
    {
      id: 2,
      name: "Cantilever chair",
      price: "$42.00",
      image: "/image 1.svg",
    },
    {
      id: 3,
      name: "Cantilever chair",
      price: "$42.00",
      image: "/image 1169.svg",
    },
    {
      id: 4,
      name: "Cantilever chair",
      price: "$42.00",
      image: "/image 3.svg",
    },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold">Featured Products</h2>
        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                <Card>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

