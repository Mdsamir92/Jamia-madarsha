export default function Videos() {
  return (
    <div id="videos" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Jalsa Dastar Bandi Program
          </h2>
        </div>

        {/* Video Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Video 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full h-[450px] ">
              <iframe
                className="w-full h-[560px]"
                src="https://www.youtube.com/embed/qhiUVVzlqg8"
                title="jalsa dastaar bandi program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video 2 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full h-[450px]">
              <iframe
                className="w-full h-[560px]"
                src="https://www.youtube.com/embed/afcT_7xWDNU"
                title="jalsa dastaar bandi program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center my-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hostel Rooms
          </h2>
          <p className="text-xl font-medium mt-4 text-gray-900 sm:text-2xl">
            Madarsha have two floors and 20 rooms including a guest room and a
            staff room.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Video 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full h-[450px] ">
              <iframe
                className="w-full h-[560px]"
                src="https://www.youtube.com/embed/M8AFUwrUo_0"
                title="jalsa dastaar bandi program"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video 2 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full h-[450px]">
              <img
                src="/images/conferenceHall.jpg"
                // poster="/images/thumbnail2.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
