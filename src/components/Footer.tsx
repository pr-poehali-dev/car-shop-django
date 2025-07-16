import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Car" size={24} className="text-blue-400" />
              <h3 className="text-xl font-bold">LuxuryAuto</h3>
            </div>
            <p className="text-slate-400">Премиальные автомобили высокого класса с индивидуальным подходом</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Седаны</li>
              <li>Внедорожники</li>
              <li>Купе</li>
              <li>Спорткары</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Тест-драйв</li>
              <li>Конфигуратор</li>
              <li>Техническое обслуживание</li>
              <li>Гарантия</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-slate-400">
              <li>+7 (495) 123-45-67</li>
              <li>info@luxuryauto.ru</li>
              <li>ул. Тверская, 15, Москва</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 LuxuryAuto. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;