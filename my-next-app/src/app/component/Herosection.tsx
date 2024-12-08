import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-50 ">
      <div className="container flex min-h-[600px] items-center py-12 ml-12 mt-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-medium text-pink-600">Best Furniture For Your Home</h2>
              <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
                New Furniture Collection
                <br />
                Trends in 2020
              </h1>
              <p className="mt-4 max-w-[600px] text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600">Shop Now</Button>
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0 z-10 rounded-full bg-blue-400 px-4 py-2 text-white">
              50% off
            </div>
            <Image
              src="/chair.svg"
              alt="Pink Shell Chair"
              width={500}
              height={500}
              className="relative z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

