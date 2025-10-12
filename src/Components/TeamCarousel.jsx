import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import capito from "../assets/capito.jfif"
import az from "../assets/az.jpg"
import asiya from "../assets/asiya.jpg"
import kabiru from "../assets/kabiru.jpg"
import harisu from "../assets/Harisu.jpg"
import maryam from "../assets/Maryam.jpg"
import owoniyi from "../assets/Owoniyi.jpg"

const teamMembers = [
  {
    name: "Akingbade Abdullah A.",
    role: "President",
    image: [capito],
  },
  {
    name: "Owoniyi Taiye A.",
    role: "Vice President",
    image: [owoniyi],
  },
  {
    name: "Amidu Hassan T.",
    role: "Senior Exchange Officer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Akobe Henry O.",
    role: "Secretary General",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Maryam Hamman I.",
    role: "Junior Exchange Officer",
    image: [maryam],
  },
  {
    name: "Bashir Kabiru",
    role: "Assistant Exchange Officer",
    image: [kabiru],
  },
  {
    name: "Anthony Blessing N.",
    role: "Project Manager I",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Saluhudeen Asiya U.",
    role: "Project Manager II",
    image: [asiya],
  },
  {
    name: "Iyiola Abdulazeez O.",
    role: "Financial Secetary",
    image: [az],
  },
   {
    name: "Muhamadulfattah O.",
    role: "PRC",
    image: "https://via.placeholder.com/150",
  },
   {
    name: "Abubakar Harisu",
    role: "Graphics Designer",
    image: [harisu],
  },
];

export default function TeamCarousel() {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800 font-sans">
        Meet Our Team
      </h2>
<h4 className="text-blue-700 text-xl font-bold pl-5 mb-3"> TEAM - 2024/2025 </h4>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          slidesPerView={1}
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
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
