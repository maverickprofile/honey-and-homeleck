const ContactCTA = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Subtext */}
        <p className="text-gray-400 text-sm mb-4 tracking-wider">
          Interested in working together?
        </p>

        {/* Contact Heading with decorative lines */}
        <div className="flex items-center justify-center gap-4">
          <span className="hidden sm:inline-block w-20 h-[1px] bg-gray-500" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-serif tracking-wide">
            Contact Us
          </h2>
          <span className="hidden sm:inline-block w-20 h-[1px] bg-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
