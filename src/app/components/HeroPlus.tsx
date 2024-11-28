export default function HeroPlus() {
  return (
    <section className="relative">
      <div className="mx-auto flex flex-col max-w-5xl relative rounded-sm h-[60vh] md:mb-16 overflow-hidden group">
        <div 
          className="absolute inset-0 transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
          style={{
            backgroundImage: 'url("/images/bkg2.png")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Gradient overlay from transparent to dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Desktop Content */}
        <div className="hidden md:block absolute bottom-0 left-0 z-10 p-8 md:p-12 bg-red-500/70 w-fit">
          <h1 className="text-base md:text-xl lg:text-4xl font-light mb-2 leading-relaxed text-white">
            Strassen und Bruekenbau
          </h1>
          <p className="text-3xl md:text-xl lg:text-5xl font-bold leading-tight md:leading-relaxed text-white max-w-2xl">
            Building Communities, <br/><span className="text-white">Transforming Lives.</span>
          </p>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden bg-red-500f p-4 py-8 w-full border-t-8 border-red-500 mb-8">
        <h1 className="text-xl font-light leading-relaxed text-black">
          Strassen und Bruekenbau
        </h1>
        <p className="text-4xl font-bold leading-9 text-black">
          Building Communities, <br/><span className="text-black">Transforming Lives.</span>
        </p>
      </div>
    </section>
  )
}
