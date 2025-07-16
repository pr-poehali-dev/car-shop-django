import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

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

interface CatalogSectionProps {
  onCarSelect: (car: Car) => void;
}

const CatalogSection: React.FC<CatalogSectionProps> = ({ onCarSelect }) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const cars: Car[] = [
    {
      id: 1,
      name: 'Premium Sedan',
      brand: 'Luxury Motors',
      price: '₽4,500,000',
      image: 'img/a046da8f-d615-4ad6-bac6-469220ed65b6.jpg',
      features: ['Кожаный салон', 'Панорамная крыша', 'Система навигации', 'Парковочный автопилот'],
      fuel: '2.0L Turbo',
      transmission: 'Автомат',
      year: '2024'
    },
    {
      id: 2,
      name: 'Executive SUV',
      brand: 'Luxury Motors',
      price: '₽6,200,000',
      image: 'img/9e9b6b40-eacd-4f8a-98ee-1aa092c758a5.jpg',
      features: ['Адаптивный круиз-контроль', '7 мест', 'Система мониторинга слепых зон', 'Премиум аудио'],
      fuel: '3.0L V6',
      transmission: 'Автомат',
      year: '2024'
    },
    {
      id: 3,
      name: 'Sport Coupe',
      brand: 'Luxury Motors',
      price: '₽5,800,000',
      image: 'img/a046da8f-d615-4ad6-bac6-469220ed65b6.jpg',
      features: ['Спортивная подвеска', 'Карбоновые вставки', 'Система Launch Control', 'Сиденья Recaro'],
      fuel: '3.5L V6 Twin Turbo',
      transmission: 'Автомат',
      year: '2024'
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Каталог автомобилей</h2>
          <p className="text-xl text-slate-600">Выберите автомобиль своей мечты из нашей коллекции</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card key={car.id} className="hover:shadow-xl transition-shadow duration-300 border-slate-200">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600">
                  {car.year}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-slate-900">{car.name}</CardTitle>
                <CardDescription className="text-slate-600">{car.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                    <Badge variant="outline">{car.fuel}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Icon name="Settings" size={16} className="mr-1" />
                    {car.transmission}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Особенности:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="Check" size={14} className="mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setSelectedCar(car)}
                      >
                        <Icon name="Eye" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{car.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img 
                          src={car.image} 
                          alt={car.name} 
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Технические характеристики:</h4>
                            <ul className="text-sm space-y-1">
                              <li>Двигатель: {car.fuel}</li>
                              <li>КПП: {car.transmission}</li>
                              <li>Год выпуска: {car.year}</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Комплектация:</h4>
                            <ul className="text-sm space-y-1">
                              {car.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <Icon name="Check" size={14} className="mr-2 text-green-500" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => onCarSelect(car)}
                  >
                    <Icon name="Settings" size={16} className="mr-2" />
                    Конфигуратор
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;