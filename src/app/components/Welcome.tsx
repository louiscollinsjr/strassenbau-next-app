import CompanyInfo from './CompanyInfo';

export default function Welcome() {
    return (
        <section className="mx-auto px-4 py-16 md:py-24" style={{ maxWidth: '980px' }}>
            <div className="max-w-4xl">
                <p className="text-lg md:text-lg leading-relaxed text-white/80">
                <span className='text-white'>Strassen und Brückengbau</span> has rapidly distinguished itself in a competitive construction market through its professional approach and adaptability. Our team of highly skilled professionals delivers comprehensive solutions with precision and dedication, consistently meeting client needs across diverse construction segments. We pride ourselves on transforming challenges into opportunities and building lasting client relationships through exceptional technical expertise and responsive service.
                </p>
            </div>
            <CompanyInfo />
        </section>
    );
}
