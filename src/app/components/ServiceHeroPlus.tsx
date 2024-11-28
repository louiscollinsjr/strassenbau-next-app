import CustomHero from './CustomHero';

export default function ServiceHeroPlus() {
  return (
    <CustomHero
      overline="Strassen und Bruekenbau"
      title={<>Comprehensive Solutions for Modern Infrastructure.</>}
      images={['/images/bkg3.png']}
      accentColor="orange"
    />
  );
}

