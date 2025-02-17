import { useState } from "react";
import user1 from "/src/assets/User1.png";
import user2 from "/src/assets/User2.png";
import user3 from "/src/assets/User3.png";
import leftarrow from "/src/assets/icons/leftarrow.svg";
import rightarrow from "/src/assets/icons/rightarrow.svg";
import Shape from "/src/assets/icons/Shape.svg";

const testimonials = [
  {
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
    name: "Serhiy Hipskyy",
    position: "CEO Universal",
    image: user1,
  },
  {
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    name: "Justus Menke",
    position: "CEO Eronaman",
    image: user2,
  },
  {
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    name: "Britain Eriksen",
    position: "CEO Universal",
    image: user3,
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="mt-80 pb-20 relative flex flex-col items-center text-center test-clr text-clr">
      <h1 className="mt-20 text-4xl font-bold">Testimonials</h1>
      <div className="mt-10 flex justify-center gap-8 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`max-w-sm p-6 text-center h-92 flex flex-col justify-between border border-gray-200 transition-all duration-500 ${
              index === activeIndex ? "bg-white shadow-lg" : "bg-transparent"
            }`}
          >
            <p className="mt-5 text-lg tracking-widest text-center">
              <img src={Shape} alt="Star" className="w-40 h-4 mb-8 mx-auto" />
              {testimonial.text}
            </p>
            <div className="flex items-center justify-center mt-8 mb-8">
              <img src={testimonial.image} alt="User" className="w-10 h-10 mr-3" />
              <div className="text-left">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center lg:flex-row items-center gap-2 ">
        <button onClick={prevSlide}>
          <img src={leftarrow} alt="Previous" className="w-10 h-10 cursor-pointer rotate-90 lg:rotate-0" />
        </button>
        <button onClick={nextSlide}>
          <img src={rightarrow} alt="Next" className="w-10 h-10 cursor-pointer rotate-90 lg:rotate-0" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
