export default function Courses() {
  const courses = [
    {
      image: "/images/girl.jpg"
    },
    {
      image: "/images/gallery5.jpg"   
    },
    {
      image: "/images/gallery6.jpg"   
    },
    {
      image: "/images/gallery.jpg"   
    },
    {
      image: "/images/gallery1.jpg"   
    },
    {
      image: "/images/gallery2.jpg"   
    },
    {
      image: "/images/gallery3.jpg"   
    },
    {
      image: "/images/gallery4.jpg"   
    },
  
  ];

  return (
    <div id="courses" className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our beautiful collection of Islamic art and studies.
          </p>
        </div>

        {/* Image Cards */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <div className="h-56 w-full relative">
                <a href={course.image} target="_blank" rel="noopener noreferrer">
                  <img
                    src={course.image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
