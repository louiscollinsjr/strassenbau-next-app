'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <div
      className="mx-auto px-4 py-8 md:py-20 min-h-[50vh] flex flex-col justify-center"
      style={{ maxWidth: "980px" }}
    >
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
      <h1 className="text-sm md:text-xl lg:text-2xl font-light mb-2 md:mb-4 text-gray-900 dark:text-white">
        Strassen und Bruekenbau
      </h1>
      <p className="text-3xl md:text-5xl lg:text-8xl font-bold text-gray-900 dark:text-white">
        Building Connections, <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-green-500 to-blue-500">Strengthening Communities.</span>
      </p>
    </div>
  )
}
