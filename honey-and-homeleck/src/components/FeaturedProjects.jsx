const FeaturedProjects = () => {
  const images = [
    "/Screenshot 2025-05-17 at 12.39.01 PM.png",
    "/Screenshot 2024-11-26 at 8.03.25 PM.png",
    "/Screenshot 2025-05-17 at 12.39.01 PM.png",
    "/Screenshot 2024-11-26 at 8.03.25 PM.png",
    "/Screenshot 2025-05-17 at 12.39.01 PM.png",
  ]; // Replace with your real image paths

  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center mb-10">
          <div className="h-[2px] w-16 bg-yellow-500 mr-4"></div>
          <p className="uppercase text-gray-400 tracking-widest text-sm">
            Featured Projects
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[3/4] overflow-hidden rounded-md shadow-md group"
            >
              <img
                src={src}
                alt={`Featured Project ${index + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
