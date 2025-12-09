import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm shadow-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="TreeDeciduous" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">GreenScape</span>
          </div>
          <div className="hidden md:flex gap-6">
            {['Главная', 'О нас', 'Услуги', 'Портфолио', 'Цены', 'Отзывы', 'Контакты'].map((item) => (
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
  );
};

export default Header;
