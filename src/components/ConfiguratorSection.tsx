import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Configuration {
  color: string;
  interior: string;
  wheels: string;
  packages: string[];
}

const ConfiguratorSection = () => {
  const [configuration, setConfiguration] = useState<Configuration>({
    color: '',
    interior: '',
    wheels: '',
    packages: []
  });

  const colors = [
    { name: 'Металлик серебро', code: '#C0C0C0' },
    { name: 'Жемчужно-белый', code: '#FFFFFF' },
    { name: 'Глубокий синий', code: '#1E3A8A' },
    { name: 'Чёрный металлик', code: '#1F2937' }
  ];

  const packages = [
    { name: 'Комфорт пакет', price: '₽150,000', features: ['Подогрев сидений', 'Климат-контроль', 'Автодождь'] },
    { name: 'Спорт пакет', price: '₽200,000', features: ['Спортивная подвеска', 'Спортивные сиденья', 'Педали'] },
    { name: 'Премиум пакет', price: '₽300,000', features: ['Панорамная крыша', 'Система навигации', 'Премиум аудио'] }
  ];

  const handleConfiguration = () => {
    alert('Конфигурация сохранена! Наш менеджер свяжется с вами для уточнения деталей.');
  };

  return (
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
                      {packages.map((pkg) => (
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
  );
};

export default ConfiguratorSection;