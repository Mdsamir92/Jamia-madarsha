export default function MainGate() {
    return (
      <div  className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Madarsha Main Gate
            </h2>
          </div>
  
          {/* Centered Image */}
          <div className="mt-12 flex justify-center">
            <div
              className="overflow-hidden rounded-xl shadow-lg bg-white transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <div className="  relative">
                <a href="/images/main-gate.jpg" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/main-gate.jpg"
                    alt="Gallery image"
                    className="w-[300px] h-[500px] object-cover transition-transform transform hover:scale-105 duration-300"
                  />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  