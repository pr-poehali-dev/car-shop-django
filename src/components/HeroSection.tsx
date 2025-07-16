import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-slate-900 to-blue-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="img/6816de7d-e18c-4fcf-b864-bfd85d794401.jpg" 
          alt="Luxury Car Showroom" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Премиальные автомобили 
            <span className="text-blue-400"> высокого класса</span>
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Откройте для себя мир роскошных автомобилей с индивидуальным подходом и профессиональным сервисом
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Car" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на тест-драйв
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;