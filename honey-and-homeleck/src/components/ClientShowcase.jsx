const ClientShowcase = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-10">
          <div className="h-[2px] w-50 bg-yellow-500 mr-4"></div>
          <p className="uppercase text-gray-400 tracking-widest text-sm">
            I was working with
          </p>
        </div>

        {/* Logos Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              src="/Honey_and_hemlock_Black_logo__1_-removebg-preview (1).png"
              alt={`Client ${num}`}
              className="h-20 sm:h-24 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
