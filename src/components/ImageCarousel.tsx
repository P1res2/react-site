"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    image: "/images/slide-1.jpg",
    title: "Transforme suas ideias",
    subtitle: "em realidade digital",
  },
  {
    image: "/images/slide-2.jpg",
    title: "Simplifique seu",
    subtitle: "fluxo de trabalho",
  },
  {
    image: "/images/slide-3.jpg",
    title: "Conecte-se ao",
    subtitle: "futuro hoje",
  },
]

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-950">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
        <div className="mb-8">
          <h2 className="text-3xl font-light tracking-tight text-white lg:text-4xl xl:text-5xl">
            {slides[currentSlide].title}
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white lg:text-4xl xl:text-5xl">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute left-8 top-8 lg:left-12 lg:top-12">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
            <span className="text-lg font-bold text-zinc-950">G</span>
          </div>
          <span className="text-lg font-semibold text-white">Gabriel</span>
        </div>
      </div>
    </div>
  )
}
