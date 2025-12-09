import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ContentSections = () => {
  const services = [
    {
      icon: 'Sprout',
      title: 'Проектирование участков',
      description: 'Создаем уникальные проекты с учетом особенностей вашего участка и пожеланий'
    },
    {
      icon: 'TreePine',
      title: 'Озеленение территории',
      description: 'Подбираем растения, создаем цветники и газоны для идеального сада'
    },
    {
      icon: 'Droplets',
      title: 'Системы полива',
      description: 'Автоматический полив для здоровья и красоты вашего сада'
    },
    {
      icon: 'Sun',
      title: 'Освещение участка',
      description: 'Световые решения для комфорта и безопасности в темное время суток'
    },
    {
      icon: 'Fence',
      title: 'Малые архитектурные формы',
      description: 'Беседки, патио, дорожки и другие элементы декора'
    },
    {
      icon: 'Scissors',
      title: 'Уход и обслуживание',
      description: 'Регулярный уход за садом: стрижка, подкормка, обработка растений'
    }
  ];

  const portfolio = [
    {
      title: 'Японский сад',
      category: 'Восточный стиль',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800'
    },
    {
      title: 'Английский парк',
      category: 'Классический дизайн',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800'
    },
    {
      title: 'Современный минимализм',
      category: 'Минимализм',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
    },
    {
      title: 'Средиземноморская терраса',
      category: 'Средиземноморье',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
    },
    {
      title: 'Альпийская горка',
      category: 'Рокарий',
      image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800'
    },
    {
      title: 'Вертикальное озеленение',
      category: 'Современный дизайн',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
    }
  ];

  const blogPosts = [
    {
      title: 'Как подготовить сад к зиме',
      excerpt: 'Полезные советы по подготовке растений и почвы к холодному сезону',
      date: '15 ноября 2024',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600'
    },
    {
      title: 'Топ-10 растений для тенистых участков',
      excerpt: 'Какие растения выбрать для затененных зон вашего сада',
      date: '8 ноября 2024',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600'
    },
    {
      title: 'Секреты идеального газона',
      excerpt: 'Как создать и поддерживать зеленый густой газон круглый год',
      date: '1 ноября 2024',
      image: 'https://images.unsplash.com/photo-1584279735330-2e843398f1d6?w=600'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Преобразили наш участок до неузнаваемости! Профессиональный подход, качественная работа и внимание к деталям. Результат превзошел все ожидания.',
      rating: 5,
      project: 'Загородный сад'
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Отличная команда специалистов. Создали проект под ключ за месяц, все растения прижились. Особенно понравилось освещение участка - вечером сад выглядит волшебно.',
      rating: 5,
      project: 'Современный дизайн'
    },
    {
      name: 'Елена Морозова',
      text: 'Обратились за системой автополива и остались очень довольны. Все работает как часы, расход воды оптимальный. Спасибо за качественный сервис!',
      rating: 5,
      project: 'Система полива'
    }
  ];

  return (
    <>
      <section id="услуги" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Полный спектр работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От проектирования до регулярного обслуживания вашего сада
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — уникальное решение для конкретного участка
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="mb-2 bg-primary">{project.category}</Badge>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span>Смотреть проект</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прозрачные тарифы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Стоимость работ зависит от площади участка и сложности проекта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary/10 text-primary">Базовый</Badge>
                <CardTitle className="text-3xl">от 50 000 ₽</CardTitle>
                <CardDescription>Для небольших участков до 6 соток</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Выезд на участок и консультация</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Эскизный проект в 2D</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Подбор растений</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Смета на материалы</span>
                </div>
                <Button className="w-full mt-6" variant="outline">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-primary">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Стандарт</Badge>
                <CardTitle className="text-3xl">от 120 000 ₽</CardTitle>
                <CardDescription>Для участков от 6 до 15 соток</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Все из базового тарифа</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">3D визуализация проекта</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Проект системы полива</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Проект освещения</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Авторский надзор</span>
                </div>
                <Button className="w-full mt-6">Выбрать тариф</Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent/10 text-accent">Премиум</Badge>
                <CardTitle className="text-3xl">от 250 000 ₽</CardTitle>
                <CardDescription>Для больших участков от 15 соток</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Все из стандартного тарифа</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Полная реализация проекта</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Малые архитектурные формы</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Гарантия на растения 2 года</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">Бесплатное обслуживание 1 год</span>
                </div>
                <Button className="w-full mt-6" variant="outline">Выбрать тариф</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Нужен индивидуальный расчет? Свяжитесь с нами для точной оценки вашего проекта
            </p>
            <Button size="lg" variant="outline">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      <section id="блог" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Блог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные советы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Делимся опытом и секретами ухода за садом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют и рекомендуют друзьям
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm">{testimonial.project}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </CardContent>
                <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif">"</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;
