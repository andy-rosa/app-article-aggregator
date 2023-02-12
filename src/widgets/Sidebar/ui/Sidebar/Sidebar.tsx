import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const {
        className,
        children,
    } = props;

    return (
        <aside
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            {children}
            <button onClick={onToggle}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </aside>
    );
};

