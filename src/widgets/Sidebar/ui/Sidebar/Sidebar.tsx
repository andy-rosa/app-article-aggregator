import { classNames, } from 'shared/lib/classNames/classNames';
import { FC, useState, } from 'react';
import { ThemeSwitcher, } from 'widgets/ThemeSwitcher';
import { LangSwitcher, } from 'widgets/LangSwitcher';
import { Button, } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed,] = useState(false);

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
      >
        {'>'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </aside>
  );
};
