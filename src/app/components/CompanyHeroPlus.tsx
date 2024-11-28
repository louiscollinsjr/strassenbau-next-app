'use client';

import CustomHero from './CustomHero';

const images = [
  '/images/bkg1.png',
  '/images/bkg2.png',
  '/images/bkg3.png',
];

export default function CompanyHeroPlus() {
  return (
    <CustomHero
      overline="Our Company"
      title={<>Excellence in Engineering, Commitment to Quality.</>}
      images={images}
      accentColor="blue"
    />
  );
}
