import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <>
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
                    <div className="space-y-1">
                      <a href="tel:+79994483326" className="block text-muted-foreground hover:text-primary transition-colors">+7 (999) 448-33-26</a>
                      <a href="tel:+79181816087" className="block text-muted-foreground hover:text-primary transition-colors">+7 (918) 181-60-87</a>
                    </div>
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
                    <div className="text-muted-foreground">г. Сочи, Краснодарский край</div>
                    <div className="text-sm text-muted-foreground/80 mt-1">Работаем по всему Сочи и близлежащим районам</div>
                  </div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-6 bg-[#25D366] hover:bg-[#20BA5A] text-white w-full md:w-auto"
                asChild
              >
                <a href="https://wa.me/79994483326" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Написать в WhatsApp
                </a>
              </Button>
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
    </>
  );
};

export default ContactSection;
