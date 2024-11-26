import CompanyInfo from './CompanyInfo';
import CompanyPartners from './CompanyPartners';

export default function Welcome() {
    return (
        <section className="mx-auto px-6 pb-16 md:py-10" style={{ maxWidth: '980px' }}>
            <div className="max-w-5xl">
                <p className="text-lg md:text-lg leading-relaxed text-white/80">
                <span className='text-white text-xl font-medium'>Strassen und Brückengbau Romaina and Strassen und Brückengbau Serbia (Sala & Raulac doo)</span> have rapidly distinguished themselves in a competitive construction market through their professional approach and adaptability. Our team of highly skilled professionals delivers comprehensive solutions with precision and dedication, consistently meeting client needs across diverse construction segments. 
                </p>
                
                <p className="text-lg md:text-lg leading-relaxed text-white/80 pt-8">We pride ourselves on transforming challenges into opportunities and building lasting client relationships through exceptional technical expertise and responsive service.
                </p>
            </div>
            <CompanyInfo />
            <CompanyPartners />

        </section>
    );
}