import { FiTruck, FiPackage, FiHeadphones, FiClock } from 'react-icons/fi'

export function ServicesSection() {
  const services = [
    {
      icon: <FiTruck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: <FiPackage className="h-8 w-8" />,
      title: "Easy Returns",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: <FiHeadphones className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      icon: <FiClock className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold">What Shopex Offer!</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center"
            >
              {service.icon}
              <h3 className="font-medium">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

