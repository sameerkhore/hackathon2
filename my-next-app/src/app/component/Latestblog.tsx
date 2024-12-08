import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "Top essential Trends in 2024",
    date: "14 August 2024",
    excerpt: "More off this less hello samlande lied much over tightly circa horse taped mightily",
  },
  {
    id: 2,
    title: "Top essential Trends in 2024",
    date: "14 August 2024",
    excerpt: "More off this less hello samlande lied much over tightly circa horse taped mightily",
  },
  {
    id: 3,
    title: "Top essential Trends in 2024",
    date: "14 August 2024",
    excerpt: "More off this less hello samlande lied much over tightly circa horse taped mightily",
  },
]

export function LatestBlog() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-indigo-900 mb-8">Leatest Blog</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="border-none shadow-none">
            <CardContent className="p-0">
              <Image
                src="/placeholder.svg"
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                <span>By Admin</span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-medium text-lg mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
              <Link href="#" className="text-pink-500 text-sm">Read More</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

