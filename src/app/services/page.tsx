'use client'
import ServicesWelcome from '../components/ServicesWelcome';
import CompanySpecializations from '../components/CompanySpecializations';
import ServiceHeroPlus from '../components/ServiceHeroPlus';

export default function ServicesPage() {
    return (
        <main className="pt-32">
            <ServiceHeroPlus />
            <ServicesWelcome />
            <CompanySpecializations />
        </main>
    );
}
