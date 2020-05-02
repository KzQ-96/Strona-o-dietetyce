import React from 'react'
import '../styles/Navigation.css';
import Hamburger from '../components/Hamburger';
import NavMenu from '../components/NavMenu';

// const list = [
//     {name: 'Strona Główna', path: '/', exact: true},
//     {name: 'Kalkulatory', path: '/kalkulatory'},
//     {name: 'Porady Żywieniowe', path: '/porady'},
//     {name: 'Nasze Produkty', path: '/produkty'},
//     {name: 'Blog', path: '/blog'},
// ]

// const nav_list = list.map(item => (
//     <li key={item.name}>
//         <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
//     </li>
// ))

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav_container">
                <div className="nav_logo">
                    <img src="" alt="SoFit ~ Porady Dietetyczne"/>
                </div>
                {<NavMenu/>}
                {<Hamburger />}
            </div>
        </nav>
    );
}

export default Navigation;