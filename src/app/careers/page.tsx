import CareerHeroPlus from "../components/CareerHeroPlus";
import CareerWelcome from "../components/CareerWelcome";
import JoinUs from "../components/JoinUs";

export default function CareersPage() {
    return (
        <main className="md:pt-32">
            <CareerHeroPlus />
            <CareerWelcome />
            <JoinUs />
        </main>
    );
}
