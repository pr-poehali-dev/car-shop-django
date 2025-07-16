import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import ConfiguratorSection from '@/components/ConfiguratorSection';
import TestDriveSection from '@/components/TestDriveSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

interface Car {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  features: string[];
  fuel: string;
  transmission: string;
  year: string;
}

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <HeroSection />
      <CatalogSection onCarSelect={handleCarSelect} />
      <ConfiguratorSection />
      <TestDriveSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;