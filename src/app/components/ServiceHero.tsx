export default function ServiceHero() {
  return (
    <div
      className="mx-auto px-[22px] py-8 md:py-40 flex flex-col max-w-5xl"
    >
      <div className='bg-gray-200/30 dark:bg-white/5 pt-24 px-8 rounded-lg min-h-[50vh]'>
        <div className="flex justify-left mb-1 pl-1">
          {/* <Image
            src="/images/logo_bridge.svg"
            alt="Bridge Logo"
            width={100}
            height={100}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
            priority
          /> */}
        </div>
        <h1 className="text-sm md:text-xl lg:text-4xl font-light mb-6 md:mb-8 leading-relaxed text-gray-900 dark:text-white">
          Our Services
        </h1>
        <p className="text-3xl md:text-xl lg:text-4xl font-bold leading-normal md:leading-relaxed text-gray-900 dark:text-white max-w-2xl">
          Comprehensive Solutions for <span className=" text-gray-900 dark:text-white">Modern Infrastructure</span>
        </p>
      </div>
    </div>
  )
}
