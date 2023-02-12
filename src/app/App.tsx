import './styles/index.scss';
import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {useTheme} from "app/providers/ThemeProvider";


const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter/>
        </div>
    );
};

export default App;
