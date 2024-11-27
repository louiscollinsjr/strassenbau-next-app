'use client'

import ServiceHero from '../components/ServiceHero';
import ServicesWelcome from '../components/ServicesWelcome';
import CompanySpecializations from '../components/CompanySpecializations';

export default function ServicesPage() {
    return (
        <main className="">
            <ServiceHero />
            <ServicesWelcome />
            <CompanySpecializations />
        </main>
    );
}
