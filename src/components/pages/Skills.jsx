import React from "react"
import { Heading } from "../common/Heading"
import { skills } from "../data/dummydata"

export const Skills = () => {
  return (
    <section className="skills relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
    {/* Background blobs */}
    <div className="absolute inset-0 -z-10">
      <div className="w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30 absolute top-[-4rem] left-[-4rem] animate-pulse"></div>
      <div className="w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 absolute bottom-[-4rem] right-[-4rem] animate-pulse"></div>
    </div>

    <div className="container mx-auto px-4">
      <Heading title="My Skills & Expertise" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        {skills.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:scale-[1.02]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Gradient Icon Circle */}
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-tr from-indigo-400 to-indigo-600 p-[3px]">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-indigo-600 text-3xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 tracking-wide text-center mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed text-center mb-4">
              {item.desc}
            </p>
            {/* Animated Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-4 overflow-hidden">
              <div
                className="h-2 rounded-full bg-indigo-500 transition-all duration-1000 ease-in-out"
                style={{ width: `${70 + index * 5}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
