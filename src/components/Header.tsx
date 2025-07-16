import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={28} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900">LuxuryAuto</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#catalog" className="text-slate-700 hover:text-blue-600 transition-colors">Каталог</a>
            <a href="#configurator" className="text-slate-700 hover:text-blue-600 transition-colors">Конфигуратор</a>
            <a href="#test-drive" className="text-slate-700 hover:text-blue-600 transition-colors">Тест-драйв</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О дилере</a>
            <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;