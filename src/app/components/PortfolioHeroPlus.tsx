'use client';

import { useState, useEffect } from 'react';
import CustomHero from './CustomHero';

const images = [
  '/images/AdobeStock_126264465.jpeg',
  '/images/AdobeStock_275218656.jpeg',
];

export default function PortfolioHeroPlus() {
  return (
    <CustomHero
      overline="Our Company"
      title={<>Excellence in Engineering, Commitment to Quality.</>}
      images={images}
      accentColor="blue"
    />
  );
}
