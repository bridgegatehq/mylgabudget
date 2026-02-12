import React from 'react'
import { Icons } from './Icons'
import Image from 'next/image'
import { Eye, Users, ShieldCheck } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-[768px] bg-[#1A7A8A] relative overflow-hidden">
      {/* Navigation Bar */}
      <div className="p-6 border-b border-white/25 flex items-center justify-center">
        <Icons.logo />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 md:px-16 lg:px-20 pt-12 lg:pt-20 pb-16 gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="flex flex-col gap-6 max-w-[580px] z-10">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight">
            Empowering Transparency at the Local Level.
          </h1>

          <p className="text-white/80 text-base md:text-lg font-normal leading-relaxed">
            Budget Finance Portal for the 774 Local Governments.
          </p>

          {/* Values Section */}
          <div className="mt-8 lg:mt-16">
            <p className="text-white/90 text-sm font-semibold mb-4 tracking-wide">
              Established to promote;
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm font-medium transition-all duration-300 hover:bg-white/25 hover:scale-[1.02]">
                <Eye className="w-4 h-4 text-white/80" />
                Transparency
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm font-medium transition-all duration-300 hover:bg-white/25 hover:scale-[1.02]">
                <Users className="w-4 h-4 text-white/80" />
                Accountability
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm font-medium transition-all duration-300 hover:bg-white/25 hover:scale-[1.02]">
                <ShieldCheck className="w-4 h-4 text-white/80" />
                Community Participation
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Map */}
        <div className="relative flex-shrink-0 w-full lg:w-auto lg:max-w-[55%] flex items-center justify-center lg:justify-end">
          <Image
            src="/assets/hero-image.png"
            alt="Nigeria Map showing budget distribution across Local Government Areas"
            width={700}
            height={500}
            quality={100}
            priority
            className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero