import DownloadProfile from "./DownloadProfile";

export default function CompanyWelcome() {
    return (
        <section className="mx-auto px-[22px] pb-8 md:py-2 md:pr-40 max-w-5xl">
            <div className="max-w-3xl">
                <p className='text-lg font-medium text-gray-900 dark:text-white mb-2'>Strassen und Bruekenbau: Engineering Connections That Last</p> 
                <p className="text-base md:text-base text-gray-900 dark:text-white">
                    At Strassen und Bruekenbau, we believe our success is built on three fundamental pillars: our valued clients, dedicated employees, and the communities we serve. Our approach combines technical expertise with a deep understanding of human needs, ensuring every project not only meets technical specifications but also enhances the lives of those who interact with our infrastructure.
                </p>
                
                <p className="text-base md:text-base text-gray-900 dark:text-white pt-8">
                    We foster long-term partnerships through transparent communication, collaborative problem-solving, and an unwavering commitment to quality. Our team&rsquo;s expertise is matched only by their dedication to understanding and exceeding client expectations, while ensuring sustainable and community-focused solutions.
                </p>

                <p className="text-base md:text-base text-gray-900 dark:text-white pt-8">
                    As industry leaders, we invest in our people, embrace innovation, and maintain the highest standards of safety and environmental responsibility. Every project we undertake reflects our commitment to building not just infrastructure, but stronger, more connected communities.
                </p>
            </div>
            <DownloadProfile/>
        </section>
    );
}
