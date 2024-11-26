'use client'

import CompanyPartners from "../components/CompanyPartners";
import Clients from "../components/Clients";
import Welcome from "../components/Welcome";
import DownloadProfile from "../components/DownloadProfile";

export default function CompanyPage() {
    return (
        <main className="">
            <div className="relative">
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/images/AdobeStock_527244689_Preview.jpeg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.9
                    }}
                />
                {/* Dark overlay mask */}
                <div 
                    className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 to-black/30"
                    aria-hidden="true"
                />
                <div className="relative z-10 mx-auto px-4 py-2 md:pb-20 min-h-[80vh] flex flex-col justify-center" style={{ maxWidth: '980px' }}>
                    <h1 className="text-sm md:text-xl lg:text-2xl font-light mb-2 md:mb-4 text-white">Strassen und Bruekenbau</h1>
                    <p className="text-3xl md:text-5xl lg:text-8xl font-bold text-white">Building Connections, Strengthening Communities.</p>
                </div>
            </div>
            <Welcome />
            <DownloadProfile />
            <Clients />
            <CompanyPartners />
        </main>
    );
}
