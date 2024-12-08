import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PromotionalBanners() {
  return (
    <section className="grid md:grid-cols-2 gap-4 mb-16">
      {[1, 2].map((item) => (
        <Card key={item} className="bg-pink-50">
          <CardContent className="flex items-center p-6">
            <div>
              <Badge className="bg-pink-500 text-white mb-2">25% off in all products</Badge>
              <Image
                src="/placeholder.svg"
                alt="Promotional item"
                width={150}
                height={150}
                className="mt-4"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}

