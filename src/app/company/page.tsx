'use client'

import CompanyPartners from "../components/CompanyPartners";
import Clients from "../components/Clients";
import CompanySpecializations from "../components/CompanySpecializations";
import CompanyWelcome from "../components/CompanyWelcome";
import CompanyHeroPlus from "../components/CompanyHeroPlus";

export default function CompanyPage() {
    return (
        <main className="md:pt-32">
            <CompanyHeroPlus />
            <CompanyWelcome />
            <CompanySpecializations />
            <Clients />
            <CompanyPartners />
        </main>
    );
}
