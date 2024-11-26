import CompanyPartners from "../components/CompanyPartners";
import Clients from "../components/Clients";
import Welcome from "../components/Welcome";
import DownloadProfile from "../components/DownloadProfile";

export default function CompanyPage() {
    return (
        <main className="pt-36">
            <div className="mx-auto px-4 py-2 md:py-20 min-h-[20vh] flex flex-col justify-center" style={{ maxWidth: '980px' }}>
                <h1 className="text-sm md:text-xl lg:text-2xl font-light mb-2 md:mb-4">Strassen und Bruekenbau</h1>
                <p className="text-3xl md:text-5xl lg:text-8xl font-bold text-white">Building Connections, Strengthening Communities.</p>
            </div>
    
            <Welcome />
            <DownloadProfile />
            <Clients />
            
            <CompanyPartners />
        </main>
    );
}
