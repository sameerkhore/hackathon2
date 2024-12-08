import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DiscountItem() {
  return (
    <div className="px-24">
      <div className="items-center  gap-2 mb-8">
  <h2 className="text-2xl font-semibold text-indigo-900">Discount Item</h2>
  <div className="flex gap-4 text-sm">
          <Button variant="link" className="text-pink-500">Wood Chair</Button>
          <Button variant="link">Plastic Chair</Button>
          <Button variant="link">Sofa Collection</Button>
        </div>
        </div>
        
    
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">20% Discount Of All Products</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <p>Material expose like metals</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <p>Clear lines and geomatric figures</p>
            </div>
          </div>
          <Button className="bg-pink-500 hover:bg-pink-600">Shop Now</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 "></div>
          <Image
            src="/Group 154.png"
            alt="Discount chair"
            width={400}
            height={400}
            className="relative z-10"
          />
        </div>
        </div>
        </div>
  
  )
}

