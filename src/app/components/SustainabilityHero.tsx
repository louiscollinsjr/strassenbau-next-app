import CustomHero from './CustomHero';

export default function SustainabilityHero() {
  return (
    <CustomHero
      overline="Strassen und Bruekenbau"
      title={<>Building for tomorrow, preserving for the future.</>}
      images={['/images/future.png']}
      accentColor="emerald"
    />
  );
}

