import DownloadProfile from "./DownloadProfile";

export default function ServicesWelcome() {
    return (
        <section className="mx-auto px-[22px] pb-8 md:py-2 md:pr-40 max-w-5xl">
            <div className="max-w-3xl">
                <p className='text-lg font-medium text-gray-900 dark:text-white mb-2'>Comprehensive Infrastructure Solutions</p> 
                <p className="text-base md:text-base text-gray-900 dark:text-white">
                    At Strassen und Bruekenbau, we deliver a full spectrum of infrastructure services, from initial planning to final execution. Our expertise spans across road construction, bridge engineering, and essential infrastructure development, ensuring that each project meets the highest standards of quality and sustainability.
                </p>
                
                <p className="text-base md:text-base text-gray-900 dark:text-white pt-8">
                    Our services are backed by state-of-the-art technology and innovative methodologies, allowing us to tackle complex infrastructure challenges efficiently. We prioritize sustainable practices and environmental responsibility in every project, ensuring long-lasting solutions that benefit communities while preserving natural resources.
                </p>

                <p className="text-base md:text-base text-gray-900 dark:text-white pt-8">
                    From urban development to rural infrastructure, our team brings extensive experience and technical expertise to every project. We work closely with clients to understand their specific needs and deliver tailored solutions that exceed expectations while maintaining cost-effectiveness and project timelines.
                </p>
            </div>
            <DownloadProfile/>
        </section>
    );
}
