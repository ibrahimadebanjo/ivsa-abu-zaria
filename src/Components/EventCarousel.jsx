import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import plant from "../assets/plant.jpg"
import congress from "../assets/congress25.jpg"
import tbday from "../assets/tbday.jpg"
import museum from "../assets/museum.jpg"
import waaw24 from "../assets/waaw2024.jpg"
import wwd from "../assets/wwd.jpg"
import whd from "../assets/whd.jpg"

export default function EventsSection() {
  const events = [
    {
      title: "World AMR Awareness Week",
      date: "November 18, 2024", 
      description: "Participating in AMR advocacy",
      image:[waaw24],
    },
    {
      title: "world Water Day",
      date: "March 24, 2025",
      description: "Enlightned people on glacia preservation",
      image:[wwd],
    },
    {
      title: "World Hepatitis Day",
      date: "July 28, 2025",
      description: "Created awareness on hepatitis",
      image: [whd],
    },
     {
      title: "World Tuberculosis Day",
      date: "March 24, 2025",
      description: "Enlightened University community on tuberculosis",
      image: [tbday],
    },
     {
      title: "Museum Visitation",
      date: "August 2, 2025",
      description: "Visitation of Veterinary Anatomy Museum",
      image: [museum],
    },
     {
      title: "Grow a Plant Challenge",
      date: "Oct to Dec, 2025",
      description: "To encourage student connect to nature",
      image: [plant],
    },
     {
      title: "General Congress",
      date: "October 1, 2025",
      description: "State of association discussion",
      image: [congress],
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Our Events
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
