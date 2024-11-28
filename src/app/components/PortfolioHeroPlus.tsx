'use client';

import CustomHero from './CustomHero';

const images = [
  '/images/AdobeStock_126264465.jpeg',
  '/images/AdobeStock_275218656.jpeg',
];

export default function PortfolioHeroPlus() {
  return (
    <CustomHero
      overline="Our Portfolio"
      title={<>Your vision from concept to completion</>}
      images={images}
      accentColor="blue"
    />
  );
}
