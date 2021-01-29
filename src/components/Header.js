import {NavLink} from 'react-router-dom';

function Header() {

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
            </header>       
          </div>
      </div>
    );
}
  
export default Header;  