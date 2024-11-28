import CustomHero from './CustomHero';

export default function ContactHeroPlus() {
  return (
    <CustomHero
      overline="Strassen und Bruekenbau"
      title={<>Let's Build Something Together</>}
      images={['/images/AdobeStock_977124526.jpeg']}
      accentColor="blue"
    />
  );
}
