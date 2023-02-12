import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;

}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <ThemeSwitcher className={'asd'}/>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY} className={cls.aboutLink}>О сайте</AppLink>
            </div>
        </div>
    );
};
