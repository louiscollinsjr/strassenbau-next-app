import CustomHero from './CustomHero';

export default function  CareerHeroPlus() {
  return (
    <CustomHero
      overline="Strassen und Bruekenbau"
      title={<>Build Your Future With Us</>}
      images={['/images/AdobeStock_527244689.jpeg']}
      accentColor="red"
    />
  );
}
