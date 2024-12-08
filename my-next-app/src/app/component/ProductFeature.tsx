import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FiCheck } from 'react-icons/fi'

export function ProductFeature() {
  return (
    <section className="bg-purple-50 py-12">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/bue.png"
              alt="Blue Sofa"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">Unique Features Of leatest & Trending Products</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FiCheck className="h-4 w-4 text-pink-500" />
                <span>All frames constructed with hardwood solids and laminates</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiCheck className="h-4 w-4 text-pink-500" />
                <span>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiCheck className="h-4 w-4 text-pink-500" />
                <span>Arms, backs and seats are structurally reinforced</span>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <Button className="bg-pink-500 hover:bg-pink-600">Add To Cart</Button>
              <div>
                <p className="font-medium">B&B Italian Sofa</p>
                <p className="text-sm text-muted-foreground">$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

