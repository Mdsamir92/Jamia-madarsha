export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="bg-gradient-to-b from-white to-gray-100 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Us
          </h2>
        </div>

        {/* Centered Image */}
        <div className="mt-12 flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-lg bg-white transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300">
            <div className=" relative">
              <a
                href="/images/madarsha-trust.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/madarsha-trust.jpg"
                  alt={`Gallery image `}
                  className="w-full md:h-[500px]   object-cover transition-transform transform hover:scale-105 duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div>
        <p className="mt-12 text-center text-2xl font-semibold">
        "Scan the QR code and send money for the foundation of the Madarsha."
        </p>
        <div className="mt-12 flex justify-center">
          <img src="/images/qr-code.jpg" alt="QR Code" className="h-[500px]" />
        </div>
      </div>


      <div className="mt-12 grid gap-8 md:grid-cols-2 mx-8">
        {/* PDF 1 */}
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <iframe
            src="/images/ZAPTA-BOOK.pdf"
            className="w-full h-[400px] border-none"
            title="PDF 1"
          ></iframe>
        </div>

        {/* PDF 2 */}
        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
          <iframe
            src="/images/ZAPTA-BOOK1.pdf"
            className="w-full h-[400px] border-none"
            title="PDF 1"
          ></iframe>
        </div>
      </div>

     


    </div>
  );
}
