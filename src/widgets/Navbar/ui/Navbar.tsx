import { classNames, } from 'shared/lib/classNames/classNames';
import { useTranslation, } from 'react-i18next';
import { Modal, } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState, } from 'react';
import { Button, ButtonTheme, } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className, }: NavbarProps) => {
  const { t, } = useTranslation();
  const [isAuthModal, setIsAuthModal,] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <nav className={classNames(cls.Navbar)}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        /
      </Modal>
    </nav>
  );
};
