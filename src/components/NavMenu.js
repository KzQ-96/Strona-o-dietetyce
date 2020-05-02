import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/NavMenu.css';

const NavMenu = () => {
    return ( 
        <ul className="nav_menu">
        <li key={"Strona Główna"} className="nav_list">
            <NavLink to={'/'} exact={true}>Strona Główna</NavLink>
        </li>
        <li key={"Kalkulatory"} className="nav_list">
            <NavLink to={'/kalkulatory'} exact={true}>Kalkulatory <i class="fa fa-angle-down"></i></NavLink>
            <ul className="nav_submenu">
                <li key={'bmi'} className="nav_sublist">
                <NavLink to={'/kalkulatory/bmi'} exact={true}>Masa ciała</NavLink>
                </li>
                <li key={'asr'} className="nav_sublist">
                <NavLink to={'/kalkulatory/asr'} exact={true}>Przemiana materii</NavLink>
                </li>
                <li key={'lift'} className="nav_sublist">
                <NavLink to={'/kalkulatory/lift'} exact={true}>Wyciskanie</NavLink>
                </li>
                <li key={'burn'} className="nav_sublist">
                <NavLink to={'/kalkulatory/burn'} exact={true}>Spalanie</NavLink>
                </li>

            </ul>
        </li>
        <li key={"Porady Żywieniowe"} className="nav_list">
            <NavLink to={'/porady'} exact={true}>Porady Żywieniowe <i class="fa fa-angle-down"></i></NavLink>
            <ul className="nav_submenu">
                <li key={'mass'} className="nav_sublist">
                <NavLink to={'/porady/mass'} exact={true}>Jak zbudować mase ?</NavLink>
                </li>
                <li key={'reduction'} className="nav_sublist">
                <NavLink to={'/porady/reduction'} exact={true}>Jak zredukować kg ?</NavLink>
                </li>
                <li key={'comfort'} className="nav_sublist">
                <NavLink to={'/porady/comfort'} exact={true}>Jak poprawić samopoczucie ?</NavLink>
                </li>
            </ul>
        </li>
        <li key={"Nasze Produkty"} className="nav_list">
            <NavLink to={'/products'} exact={true}>Nasze Produkty <i class="fa fa-angle-down"></i></NavLink>
            <ul className="nav_submenu">
                <li key={'quiz'} className="nav_sublist">
                    <NavLink to={'/products/quiz'} exact={true}>Test Wiedzy</NavLink>
                </li>
                <li key={'ebook'} className="nav_sublist">
                    <NavLink to={'/products/ebook'} exact={true}>Ty też możesz !</NavLink>
                </li>
            </ul>
        </li>
        <li key={"Blog"} className="nav_list">
            <NavLink to={'/blog'} exact={true}>Blog</NavLink>
        </li>
    </ul>
     );
}
 
export default NavMenu;