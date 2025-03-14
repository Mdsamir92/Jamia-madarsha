export default function Hero() {
  return (
    <div id="home" className="h-screen relative bg-emerald-800 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80"
          alt="Islamic Architecture"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl">
          Welcome to Jamia Samir-E-milat Lil-Banat
        </h1>
        <p className="mt-6 text-xl max-w-3xl">
          Discover the beauty of Islamic education through our comprehensive courses
          and expert teachings. Join us on a journey of knowledge and spiritual growth.
        </p>
        {/* <div className="mt-10">
          <a
            href="#courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-800 bg-white hover:bg-emerald-50"
          >
            Explore Courses
          </a>
        </div> */}
      </div>
    </div>
  );
}