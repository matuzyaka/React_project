import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return <header className={s.AppHeader}>
        <img className="AppLogo" alt="logo" src={'https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png'}/>
    </header>
}

export default Header;