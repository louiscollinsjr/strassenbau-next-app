'use client'

import CompanyPartners from "../components/CompanyPartners";
import Clients from "../components/Clients";
import CompanyHero from '../components/CompanyHero';
import CompanySpecializations from "../components/CompanySpecializations";
import CompanyWelcome from "../components/CompanyWelcome";

export default function CompanyPage() {
    return (
        <main className="">
            <CompanyHero />
            <CompanyWelcome />
            <CompanySpecializations />
            <Clients />
            <CompanyPartners />
        </main>
    );
}
