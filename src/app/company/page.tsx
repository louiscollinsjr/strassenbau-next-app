'use client'

import Clients from "../components/Clients";
import CompanySpecializations from "../components/CompanySpecializations";
import CompanyWelcome from "../components/CompanyWelcome";
import CompanyHeroPlus from "../components/CompanyHeroPlus";
import JoinUs from "../components/JoinUs";
import CompanyPartners from "../components/CompanyPartners";

export default function CompanyPage() {
    return (
        <main className="pt-0 md:pt-32">
            <CompanyHeroPlus />
            <CompanyWelcome />
            <CompanySpecializations />
            <Clients />
            <CompanyPartners />
            <JoinUs />
        </main>
    );
}
