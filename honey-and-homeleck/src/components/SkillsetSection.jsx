import {
  FaUserAlt,
  FaMountain,
  FaBriefcase,
  FaRing,
} from "react-icons/fa";

const SkillsetSection = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-400 uppercase mb-2 border-l-2 border-gray-500 pl-3">
            Our Strength
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 leading-snug">
            Creating Worlds Through Film<br />
            With Artistry & Purpose
          </h2>
          <div className="h-[2px] w-20 bg-yellow-500 mb-8 mt-4"></div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            <div className="flex flex-col">
              <FaUserAlt className="text-yellow-500 text-2xl mb-2" />
              <h3 className="font-semibold text-lg">Character-Driven Stories</h3>
              <p className="text-sm text-gray-400">
                We focus on the emotional and human essence of each narrative.
              </p>
            </div>

            <div className="flex flex-col">
              <FaMountain className="text-yellow-500 text-2xl mb-2" />
              <h3 className="font-semibold text-lg">Cinematic Visuals</h3>
              <p className="text-sm text-gray-400">
                From landscapes to lighting, we craft unforgettable scenes.
              </p>
            </div>

            <div className="flex flex-col">
              <FaBriefcase className="text-yellow-500 text-2xl mb-2" />
              <h3 className="font-semibold text-lg">Production Excellence</h3>
              <p className="text-sm text-gray-400">
                From concept to final cut, we deliver professional-quality films.
              </p>
            </div>

            <div className="flex flex-col">
              <FaRing className="text-yellow-500 text-2xl mb-2" />
              <h3 className="font-semibold text-lg">Emotional Connection</h3>
              <p className="text-sm text-gray-400">
                Every story is crafted to resonate with heart and soul.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image Layering */}
        <div className="relative w-full h-[400px] sm:h-[500px]">
          {/* Back Image */}
          <img
            src="/Screenshot 2024-11-26 at 8.03.25 PM.png"
            alt="Studio Setup"
            className="rounded-md shadow-lg w-4/5 absolute top-0 left-0 object-cover"
          />
          {/* Middle Image */}
          <img
            src="/Screenshot 2025-05-17 at 12.39.01 PM.png"
            alt="Street photographer"
            className="rounded-md shadow-lg w-3/5 absolute bottom-0 left-10 object-cover"
          />
          {/* Front Image */}
          <img
            src="/Speechless Stills 17.jpg"
            alt="Camera closeup"
            className="rounded-md shadow-lg w-2/5 absolute top-1/2 right-0 transform -translate-y-1/2 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsetSection;
