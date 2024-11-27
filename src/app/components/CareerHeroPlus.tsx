'use client';

export default function CareerHeroPlus() {
  return (
    <div
      className="mx-auto flex flex-col max-w-5xl relative rounded-sm h-[60vh] mb-16"
      style={{
        backgroundImage: 'url("/images/AdobeStock_527244689.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay from transparent to dark */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 bg-blue-500/40">
        <h1 className="text-sm md:text-xl lg:text-4xl font-light mb-2 leading-relaxed text-white">
          Careers
        </h1>
        <p className="text-3xl md:text-xl lg:text-5xl font-bold leading-normal md:leading-relaxed text-white max-w-2xl">
          Build Your Future <br/><span className="text-white">With Us.</span>
        </p>
      </div>
    </div>
  )
}
