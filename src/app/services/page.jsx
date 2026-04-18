import Link from 'next/link';
import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🍔",
      title: "Quick Pickup",
      description: "Order ahead and pick up fresh, hot meals in minutes for your busy schedule.",
    },
    {
      id: 2,
      icon: "🚚",
      title: "Fast Delivery",
      description: "Enjoy speedy delivery across the city with carefully packaged food that arrives warm.",
    },
    {
      id: 3,
      icon: "🥗",
      title: "Catering Services",
      description: "From office lunches to celebrations, we offer custom catering for every event.",
    },
    {
      id: 4,
      icon: "🎉",
      title: "Party Bundles",
      description: "Shareable meal bundles designed for groups, parties, and family gatherings.",
    },
  ];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-400 mb-4">
            Our services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium food services for every appetite.
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Discover convenient ordering, fast delivery, catering, and special meal bundles built to make your dining experience effortless and delicious.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800/80 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/20 hover:border-amber-400 transition-all duration-300"
            >
              <div className="text-5xl mb-5">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-amber-400 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="bg-amber-400/10 border border-amber-400/20 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-white mb-4">Tailored service for every craving.</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Whether you're ordering for yourself, a family, or a full event, we provide flexible options, handcrafted support, and delicious food delivered on your schedule.
            </p>
            <ul className="space-y-4 text-gray-200">
              <li>• Express delivery windows</li>
              <li>• Custom catering menus</li>
              <li>• Group-friendly meal packages</li>
              <li>• In-app order tracking and support</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">Ready to get started?</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Browse our full menu or place an order now and let us handle the rest. Great taste is just a few clicks away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-500 transition"
              >
                View Menu
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3 border border-amber-400 text-amber-400 rounded-full hover:bg-white/10 transition"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;