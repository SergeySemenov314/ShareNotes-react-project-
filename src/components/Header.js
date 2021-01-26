import {NavLink} from 'react-router-dom';

function Header() {
    return (
      <div>
        <nav>
          <ul>
            <li><NavLink exact className = '' to = '/'>Главная</NavLink></li>
            <li><NavLink exact className = '' to = '/note'>Посмотреть заметку</NavLink></li>
            <li><NavLink exact className = '' to = '/create'>Новая заметка</NavLink></li>
            <li><NavLink exact className = '' to = '/about'>О сервисе</NavLink></li>
          </ul>
        </nav>
      </div>
    );
}
  
export default Header;  