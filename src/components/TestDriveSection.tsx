import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const TestDriveSection = () => {
  const handleTestDrive = () => {
    alert('Заявка на тест-драйв отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section id="test-drive" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Тест-драйв</h2>
          <p className="text-xl text-slate-600">Почувствуйте мощь и комфорт наших автомобилей</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Calendar" size={24} className="mr-2 text-blue-600" />
                Записаться на тест-драйв
              </CardTitle>
              <CardDescription>
                Заполните форму и мы свяжемся с вами для назначения времени
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
              
              <div>
                <Label htmlFor="car-model">Модель автомобиля</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите модель" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Premium Sedan</SelectItem>
                    <SelectItem value="suv">Executive SUV</SelectItem>
                    <SelectItem value="coupe">Sport Coupe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="preferred-date">Предпочтительная дата</Label>
                <Input id="preferred-date" type="date" />
              </div>
              
              <div>
                <Label htmlFor="message">Комментарий</Label>
                <Textarea 
                  id="message" 
                  placeholder="Дополнительные пожелания..." 
                  className="resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                size="lg"
                onClick={handleTestDrive}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestDriveSection;