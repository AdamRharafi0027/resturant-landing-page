const locations = [
  {
    id: 1,
    name: "Downtown Branch",
    address: "123 Main St, City Center",
    phone: "+212 600 123 456",
  },
  {
    id: 2,
    name: "Mall Branch",
    address: "Mall of Morocco, 2nd Floor",
    phone: "+212 600 654 321",
  },
  {
    id: 3,
    name: "Airport Branch",
    address: "Terminal 1, Near Gate 5",
    phone: "+212 600 789 012",
  },
];

const OurLocations = () => {
  return (
    <section id="locations" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-400 text-center mb-10">
          Our Locations
        </h2>
        <p className="text-center text-gray-300 mb-16">
          Find us at convenient spots near you!
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="cursor-pointer bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-amber-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-amber-400">
                {loc.name}
              </h3>
              <p className="text-gray-300 mb-3">{loc.address}</p>
              <p className="font-semibold">📞 {loc.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLocations;
