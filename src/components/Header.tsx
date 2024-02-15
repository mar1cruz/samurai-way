import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.headerImg}
                src="https://www.trashedgraphics.com/wp-content/uploads/2013/03/vector_fish_logo.jpg" alt=""/>
        </header>
    );
};

export default Header;