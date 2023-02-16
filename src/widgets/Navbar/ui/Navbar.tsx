import { classNames, } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme, } from 'shared/ui/AppLink/AppLink';
import { useTranslation, } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className, }: NavbarProps) => {
  const { t, } = useTranslation();
  return (
    <nav className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          {t('Навигация: Главная')}
        </AppLink>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY} className={cls.aboutLink}>
          {t('Навигация: О нас')}
        </AppLink>
      </div>
    </nav>
  );
};
