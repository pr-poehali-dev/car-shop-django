import React from 'react';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Контакты</h2>
          <p className="text-xl text-slate-600">Свяжитесь с нами любым удобным способом</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Icon name="MapPin" size={32} className="mx-auto mb-4 text-blue-600" />
            <h3 className="font-semibold mb-2">Адрес</h3>
            <p className="text-slate-600">ул. Тверская, 15<br />Москва, 125009</p>
          </div>
          
          <div className="text-center">
            <Icon name="Phone" size={32} className="mx-auto mb-4 text-blue-600" />
            <h3 className="font-semibold mb-2">Телефон</h3>
            <p className="text-slate-600">+7 (495) 123-45-67<br />+7 (495) 123-45-68</p>
          </div>
          
          <div className="text-center">
            <Icon name="Mail" size={32} className="mx-auto mb-4 text-blue-600" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-slate-600">info@luxuryauto.ru<br />sales@luxuryauto.ru</p>
          </div>
          
          <div className="text-center">
            <Icon name="Clock" size={32} className="mx-auto mb-4 text-blue-600" />
            <h3 className="font-semibold mb-2">Часы работы</h3>
            <p className="text-slate-600">Пн-Пт: 9:00-20:00<br />Сб-Вс: 10:00-18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;