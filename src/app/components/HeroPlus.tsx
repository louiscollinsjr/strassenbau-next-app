import CustomHero from './CustomHero';

export default function HeroPlus() {
  return (
    <CustomHero
      overline="Strassen und Bruekenbau"
      title={<>Building Communities, Transforming Lives.</>}
      images={['/images/bkg2.png']}
      accentColor="red"
    />
  );
}
