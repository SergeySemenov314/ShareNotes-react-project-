import './Header.css';
import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

function Header() {

  useEffect(() => {
    const menuToggle = document.querySelector('#menu-toggle');
    const mobileNavContainer = document.querySelector('#mobile-nav');
    const menuItems = mobileNavContainer.querySelectorAll('.mobile-nav__link');

   function menuItemClick(item) {
      item.onclick = function () {
        menuToggle.classList.remove('menu-icon_active');
        mobileNavContainer.classList.remove('mobile-nav_active');
      };
  
    }
  
    for (let i = 0; i < menuItems.length; i++) {
      menuItemClick(menuItems[i]);
    }

 
  

 }, []);

 
 function openMobileNav() {
  const menuToggle = document.querySelector('#menu-toggle');
  const mobileNavContainer = document.querySelector('#mobile-nav');
  menuToggle.classList.toggle('menu-icon_active');
  mobileNavContainer.classList.toggle('mobile-nav_active');
 }

 
    return (
      <div className="header-bg">
          <div className = 'container'>
            <header className="header">
              <NavLink exact className = 'header__logo' to = '/'>ShareNotes</NavLink>
                <nav className = 'header__nav'>
                    <ul className = 'header__nav-list'>
                      <li className = 'header__nav-item'><NavLink exact className = 'header__nav-link' to = '/'>Главная</NavLink></li>
                      <li className = 'header__nav-item'><NavLink exact className = 'header__nav-link' to = '/note'>Посмотреть заметку</NavLink></li>
                      <li className = 'header__nav-item'><NavLink exact className = 'header__nav-link' to = '/create'>Новая заметка</NavLink></li>
                      <li className = 'header__nav-item'><NavLink exact className = 'header__nav-link' to = '/about'>О сервисе</NavLink></li>
                    </ul>
                </nav>

                <div id='menu-toggle' className="menu-icon" onClick = {openMobileNav}>
                    <div className="menu-icon__line"></div>
                </div>

                {/* мобильная навигация */}

                <div id='mobile-nav' className="mobile-nav">
                    <ul className="mobile-nav__list">
                      <li className = 'mobile-nav__item'><NavLink exact className = 'mobile-nav__link' to = '/'>Главная</NavLink></li>
                      <li className = 'mobile-nav__item'><NavLink exact className = 'mobile-nav__link' to = '/note'>Посмотреть заметку</NavLink></li>
                      <li className = 'mobile-nav__item'><NavLink exact className = 'mobile-nav__link' to = '/create'>Новая заметка</NavLink></li>
                      <li className = 'mobile-nav__item'><NavLink exact className = 'mobile-nav__link' to = '/about'>О сервисе</NavLink></li>  
                    </ul>

                </div>
            </header>       
          </div>
      </div>
    );
}
  
export default Header;  