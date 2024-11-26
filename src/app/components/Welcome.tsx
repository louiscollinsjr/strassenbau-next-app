import CompanyInfo from './CompanyInfo';


export default function Welcome() {
    return (
        <section className="mx-auto px-6 pb-16 md:py-10" style={{ maxWidth: '980px' }}>
            <div className="max-w-5xl">
                <p className="text-lg md:text-lg leading-relaxed text-gray-900 dark:text-white">
                <span className='text-xl font-medium text-gray-900 dark:text-white'>Strassen und Bruekenbau Romaina and Strassen und Bruekenbau Serbia (Sala & Raulac doo)</span> have rapidly distinguished themselves in a competitive construction market through their professional approach and adaptability. Our team of highly skilled professionals delivers comprehensive solutions with precision and dedication, consistently meeting client needs across diverse construction segments. 
                </p>
                
                <p className="text-lg md:text-lg leading-relaxed text-gray-900 dark:text-white pt-8">We pride ourselves on transforming challenges into opportunities and building lasting client relationships through exceptional technical expertise and responsive service.
                </p>
            </div>
            <CompanyInfo />
        

        </section>
    );
}
