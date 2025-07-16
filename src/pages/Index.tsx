import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [configuration, setConfiguration] = useState({
    color: '',
    interior: '',
    wheels: '',
    packages: []
  });

  const cars = [
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

  const colors = [
    { name: 'Металлик серебро', code: '#C0C0C0' },
    { name: 'Жемчужно-белый', code: '#FFFFFF' },
    { name: 'Глубокий синий', code: '#1E3A8A' },
    { name: 'Чёрный металлик', code: '#1F2937' }
  ];

  const handleTestDrive = () => {
    alert('Заявка на тест-драйв отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  const handleConfiguration = () => {
    alert('Конфигурация сохранена! Наш менеджер свяжется с вами для уточнения деталей.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Catalog Section */}
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
                      onClick={() => setSelectedCar(car)}
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

      {/* Configurator Section */}
      <section id="configurator" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Конфигуратор</h2>
            <p className="text-xl text-slate-600">Создайте автомобиль своей мечты</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Settings" size={24} className="mr-2 text-blue-600" />
                  Выбор комплектации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="exterior" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="exterior">Экстерьер</TabsTrigger>
                    <TabsTrigger value="interior">Интерьер</TabsTrigger>
                    <TabsTrigger value="wheels">Диски</TabsTrigger>
                    <TabsTrigger value="packages">Пакеты</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="exterior" className="space-y-4">
                    <div>
                      <Label htmlFor="color" className="text-base font-medium">Цвет кузова</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                        {colors.map((color) => (
                          <div 
                            key={color.name}
                            className={`p-3 border rounded-lg cursor-pointer transition-all ${
                              configuration.color === color.name 
                                ? 'border-blue-600 bg-blue-50' 
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                            onClick={() => setConfiguration({...configuration, color: color.name})}
                          >
                            <div className="flex items-center space-x-2">
                              <div 
                                className="w-6 h-6 rounded-full border-2 border-slate-300"
                                style={{ backgroundColor: color.code }}
                              />
                              <span className="text-sm font-medium">{color.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="interior" className="space-y-4">
                    <div>
                      <Label htmlFor="interior" className="text-base font-medium">Салон</Label>
                      <Select onValueChange={(value) => setConfiguration({...configuration, interior: value})}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Выберите отделку салона" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="leather-black">Кожа чёрная</SelectItem>
                          <SelectItem value="leather-beige">Кожа бежевая</SelectItem>
                          <SelectItem value="leather-brown">Кожа коричневая</SelectItem>
                          <SelectItem value="alcantara">Алькантара</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="wheels" className="space-y-4">
                    <div>
                      <Label htmlFor="wheels" className="text-base font-medium">Колёсные диски</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        {['17" стандартные', '18" спортивные', '19" премиум'].map((wheel) => (
                          <Card 
                            key={wheel}
                            className={`cursor-pointer transition-all ${
                              configuration.wheels === wheel 
                                ? 'border-blue-600 bg-blue-50' 
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                            onClick={() => setConfiguration({...configuration, wheels: wheel})}
                          >
                            <CardContent className="p-4 text-center">
                              <Icon name="Circle" size={48} className="mx-auto mb-2 text-slate-400" />
                              <p className="font-medium">{wheel}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="packages" className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Дополнительные пакеты</Label>
                      <div className="space-y-3 mt-2">
                        {[
                          { name: 'Комфорт пакет', price: '₽150,000', features: ['Подогрев сидений', 'Климат-контроль', 'Автодождь'] },
                          { name: 'Спорт пакет', price: '₽200,000', features: ['Спортивная подвеска', 'Спортивные сиденья', 'Педали'] },
                          { name: 'Премиум пакет', price: '₽300,000', features: ['Панорамная крыша', 'Система навигации', 'Премиум аудио'] }
                        ].map((pkg) => (
                          <Card key={pkg.name} className="border-slate-200">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="font-medium">{pkg.name}</h4>
                                  <p className="text-sm text-slate-600">{pkg.features.join(', ')}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold text-blue-600">{pkg.price}</p>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="mt-1"
                                  >
                                    Добавить
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Итоговая стоимость:</p>
                      <p className="text-2xl font-bold text-blue-600">₽4,500,000</p>
                    </div>
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={handleConfiguration}
                    >
                      <Icon name="Save" size={20} className="mr-2" />
                      Сохранить конфигурацию
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Test Drive Section */}
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

      {/* About Section */}
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

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;