import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
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

      <section id="о нас" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800&q=80"
                alt="Наша команда"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Профессионалы своего дела</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                GreenScape — это команда опытных ландшафтных дизайнеров, садовников и инженеров, которые с 2010 года создают уникальные зеленые пространства.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы верим, что каждый участок имеет свой характер и потенциал. Наша задача — раскрыть его, создав гармоничное пространство для отдыха и вдохновения.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Профессиональный подход</h3>
                    <p className="text-muted-foreground">Сертифицированные специалисты с профильным образованием и многолетним опытом</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">Гарантия на все работы и растения. Бесплатное обслуживание в первый год</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Любовь к природе</h3>
                    <p className="text-muted-foreground">Используем экологичные материалы и заботимся о сохранении природной среды</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
