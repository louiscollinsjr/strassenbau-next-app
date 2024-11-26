import DownloadProfile from "./DownloadProfile";



export default function Welcome() {
    return (
        <section className="mx-auto px-[22px] pb-8 md:py-2 md:pr-40 max-w-5xl">
            <div className="max-w-3xl">
                <p className='text-lg font-medium text-gray-900 dark:text-white mb-2'>Strassen und Bruekenbau: Engineering Excellence in Construction </p> 
                <p className="text-base md:text-base text-gray-900 dark:text-white">Our teams have carved a distinctive path in the competitive construction landscape. We transform complex challenges into innovative solutions, delivering precision-driven projects that exceed client expectations. With a commitment to technical expertise and adaptive strategies, we build more than structures – we build lasting partnerships. 
                </p>
                
                <p className="text-base md:text-base text-gray-900 dark:text-white pt-8">We pride ourselves on transforming challenges into opportunities and building lasting client relationships through exceptional technical expertise and responsive service.
                </p>
            </div>
            <DownloadProfile/>
        </section>
    );
}
