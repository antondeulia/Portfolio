// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/projects/iphone-landing-preview.jpg",
          code: "https://github.com/antondeulia/apple-landing",
          live: "https://apple-landing-lake.vercel.app/",
        },
        {
          title: "title",
          path: "/projects/antmeet-preview.jpg",
          code: "https://github.com/antondeulia/antmeet",
          live: "https://antmeet.vercel.app/",
        },
        {
          title: "title",
          path: "/projects/portfolio-preview.jpg",
          code: "https://github.com/antondeulia/Portfolio",
        },
        {
          title: "title",
          path: "/projects/anime-list-preview.jpg",
          code: "https://github.com/antondeulia/anime-list",
          live: "https://anime-list-olive.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/projects/travel-app-preview.jpg",
          code: "https://github.com/antondeulia/TravelApp",
          live: "https://travel-app-hazel-delta.vercel.app/",
        },
        {
          title: "title",
          path: "/projects/url-shortener-preview.jpg",
          code: "https://github.com/antondeulia/url-shortener-front",
          live: "https://url-shortener-front-ten.vercel.app/",
        },
        {
          title: "title",
          path: "/projects/memorize-preview.jpg",
          code: "https://github.com/antondeulia/Memorize",
          live: "https://memorize-five.vercel.app",
        },
      ],
    },
  ],
};

// icons
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, i) => {
                return (
                  <div
                    key={i}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image
                        src={image.path}
                        alt={image.title}
                        width={500}
                        height={300}
                        className="object-fit"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-[50px] text-[13px] tracking-[0.2rem]">
                          {image.live && (
                            <Link
                              href={image.live}
                              target="_blank"
                              className="flex gap-2"
                            >
                              <div className="delay-100">LIVE</div>
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 ">
                                <BsArrowRight />
                              </div>
                            </Link>
                          )}

                          <Link
                            href={image.code}
                            className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"
                          >
                            CODE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
