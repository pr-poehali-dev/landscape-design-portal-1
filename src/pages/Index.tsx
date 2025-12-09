import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="TreeDeciduous" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">GreenScape</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Услуги', 'Портфолио', 'Блог', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Консультация</Button>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Профессиональный ландшафтный дизайн
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Создаем сады вашей мечты
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Превращаем обычные участки в уютные зеленые оазисы с 2010 года. 
                Индивидуальный подход, современные технологии и забота о каждом растении.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="group">
                  Заказать проект
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('портфолио')}>
                  Наши работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">14</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"
                alt="Красивый ландшафтный дизайн"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="блог" className="py-20 px-4 bg-muted/30">
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

      <section id="отзывы" className="py-20 px-4">
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

      <section id="контакты" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a href="tel:+79999999999" className="text-muted-foreground hover:text-primary transition-colors">+7 (999) 999-99-99</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:Omel.daria19999@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">Omel.daria19999@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">Москва, ул. Садовая, д. 10</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму, и мы ответим вам в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" type="tel" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input placeholder="example@mail.ru" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TreeDeciduous" className="text-primary" size={32} />
                <span className="text-2xl font-bold">GreenScape</span>
              </div>
              <p className="text-background/80">
                Профессиональный ландшафтный дизайн и уходные работы с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li>Проектирование</li>
                <li>Озеленение</li>
                <li>Системы полива</li>
                <li>Освещение</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 GreenScape. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;