import { useState } from "react"
import background from '@/assets/yacht_detail_bg.png'
import map from '@/assets/yacht_map.png'

interface Destination {
  id: string
  name: string
  country: string
  x: number // percentage
  y: number // percentage
  services: string[]
  description: string
}

const destinations: Destination[] = [
  {
    id: "usa",
    name: "Miami",
    country: "USA",
    x: 24,
    y: 45,
    services: ["Private Jets", "Luxury Yachts"],
    description: "Gateway to the Caribbean with world-class marina facilities",
  },
  {
    id: "colombia",
    name: "Cartagena",
    country: "Colombia",
    x: 26,
    y: 62,
    services: ["Yacht Charters", "Private Aviation"],
    description: "Historic coastal city with pristine Caribbean waters",
  },
]

export default function DestinationsSection() {
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null)

  return (
    <section
      className="relative w-full py-16 md:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[90rem] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3
              className="text-white mb-4 drop-shadow-2xl"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 8vw, 72px)",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              Destinations
            </h3>
            <div className="w-24 h-1 bg-[#efb958] mx-auto rounded-full"></div>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-6xl relative">
              <div className="relative w-full bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
                <img
                  src={map}
                  alt="World destinations map"
                  className="w-full h-auto rounded-xl opacity-90 contrast-125 brightness-110"
                />

                {destinations.map((destination) => (
                  <div
                    key={destination.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${destination.x}%`,
                      top: `${destination.y}%`,
                    }}
                    onMouseEnter={() => setHoveredDestination(destination.id)}
                    onMouseLeave={() => setHoveredDestination(null)}
                  >
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/30 rounded-full animate-ping"></div>
                      {/* Middle ring */}
                      <div className="absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-yellow-400/50 rounded-full animate-pulse"></div>
                      {/* Core point */}
                      <div className="relative w-4 h-4 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full shadow-lg border-2 border-white group-hover:scale-125 transition-transform duration-300">
                        <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {hoveredDestination === destination.id && (
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6 min-w-[280px] border border-white/30">
                          <div className="text-center">
                            <h4 className="font-bold text-gray-900 text-xl mb-2 tracking-tight">{destination.name}</h4>
                            <p className="text-gray-600 text-sm mb-3 font-medium uppercase tracking-wider">
                              {destination.country}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                              {destination.services.map((service, index) => (
                                <span
                                  key={index}
                                  className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-md"
                                >
                                  {service}
                                </span>
                              ))}
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{destination.description}</p>
                          </div>
                          {/* Enhanced tooltip arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                            <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white/95"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 md:mt-10 text-center">
              <p className="text-white/90 font-light text-lg tracking-wide">
                <span className="text-[#efb958] font-medium">Premium Locations:</span> Miami • Cartagena
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
