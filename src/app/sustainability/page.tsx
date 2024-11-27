import Sustainability from '../components/Sustainability';
import SustainabilityHero from '../components/SustainabilityHero';

export default function SustainabilityPage() {
    return (
        <main>
            <div className="mx-auto pt-32" style={{ maxWidth: '980px' }}></div>
            <SustainabilityHero />
            <Sustainability />
        </main>
    );
}
