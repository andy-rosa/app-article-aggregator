import { classNames, } from 'shared/lib/classNames/classNames';
import { FC, useState, } from 'react';
import { ThemeSwitcher, } from 'features/ThemeSwitcher';
import { LangSwitcher, } from 'features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme, } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme, } from 'shared/ui/AppLink/AppLink';
import { useTranslation, } from 'react-i18next';
import { RoutePaths, } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-icon.svg';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed,] = useState(false);
  const { t, } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const {
    className,
    children,
  } = props;

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed, }, [className,])}
    >
      {children}
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<' }
      </Button>
      <div className={cls.items}>

        <AppLink
          to={RoutePaths.main}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Навигация: Главная')}
          </span>
        </AppLink>

        <AppLink
          to={RoutePaths.about}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('Навигация: О нас')}
          </span>
        </AppLink>

      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </aside>
  );
};
