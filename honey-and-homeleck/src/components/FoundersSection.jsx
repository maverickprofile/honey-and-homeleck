const FoundersSection = () => {
  const founders = [
    {
      name: "Melissa Bronski",
      title: "Co-Founder / Producer / Director",
      imdb: "#",
      image:
        "https://i0.wp.com/www.honeyandhemlock.productions/wp-content/uploads/2022/10/Screen-Shot-2022-09-08-at-5.47.26-PM.png?strip=info&w=448&ssl=1",
    },
    {
      name: "Shanna Riker",
      title: "Co-Founder / Producer / Director",
      imdb: "#",
      image:
        "https://i0.wp.com/www.honeyandhemlock.productions/wp-content/uploads/2024/02/Screen-Shot-2024-02-21-at-7.24.09-PM-678x1024.png?strip=info&w=916&ssl=1",
    },
  ];

  return (
    <section className="relative text-white px-4 md:px-12 py-20 bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-3">Meet the Founders</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            The visionary filmmakers behind Honey & Hemlock Productions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="relative h-[500px] sm:h-[600px] w-full max-w-sm mx-auto overflow-hidden rounded-xl group shadow-xl"
            >
              {/* Founder Image */}
              <img
                src={founder.image}
                alt={founder.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                <h3 className="text-xl font-bold">{founder.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{founder.title}</p>
                <a
                  href={founder.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 text-sm underline hover:text-yellow-500"
                >
                  View IMDb Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
