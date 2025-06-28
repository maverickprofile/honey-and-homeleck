const FeaturedProjects = () => {
  const images = [
    "/Screenshot 2025-05-17 at 12.39.01 PM.png",
    "/Screenshot 2024-11-26 at 8.03.25 PM.png",
    "/Screenshot 2024-11-26 at 7.56.04 PM (1).png",
    
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

        {/* Responsive Image Grid with Landscape Aspect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] overflow-hidden rounded-md shadow-md group"
            >
              <img
                src={src}
                alt={`Featured Project ${index + 1}`}
                className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
