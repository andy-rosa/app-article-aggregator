import { classNames, } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme, } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-icon-light.svg';
import DarkIcon from 'shared/assets/icons/theme-icon-dark.svg';
import { Button, ThemeButton, } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;

}

export const ThemeSwitcher = ({ className, }: ThemeSwitcherProps,) => {
  const { theme, toggleTheme, } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className,],)}
      onClick={toggleTheme}
    >
      { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};