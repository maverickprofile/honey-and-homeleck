const AboutSection = () => {
  return (
    <section className="relative text-white py-16 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content on top of background */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="/h&h_hero (1) (1).png"
            alt="Honey & Hemlock Team"
            className="rounded-md shadow-lg w-full h-auto max-h-[500px] object-cover object-center"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <p className="text-sm text-gray-400 uppercase mb-2 border-l-2 border-gray-500 pl-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 leading-snug">
            We are Honey & Hemlock Productions
          </h2>
          <p className="text-gray-300 mb-4">
            A female-run production company committed to captivating audiences
            by creating new worlds through the art of filmmaking.
          </p>
          <p className="text-gray-400">
            Founded in July 2021 by Shanna Riker and Melissa Bronski, our
            mission is to tell stories that speak both to and for humanity. As
            filmmakers, we believe in sharing the human experience for those
            who search for it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
