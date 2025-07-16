import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">О нашем дилере</h2>
          <p className="text-xl text-slate-600">Более 15 лет на рынке премиальных автомобилей</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-slate-200">
            <CardContent className="p-6">
              <Icon name="Award" size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-slate-600">Только сертифицированные автомобили высокого класса</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-slate-200">
            <CardContent className="p-6">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Сервис</h3>
              <p className="text-slate-600">Индивидуальный подход к каждому клиенту</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-slate-200">
            <CardContent className="p-6">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="text-slate-600">Полная гарантия на все автомобили</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;