import './Main.css';
import {NavLink} from 'react-router-dom';

function Main() {
    return (
        <main className = 'main-bg'>
            <div className="container">
                <div className="main">
                    <div className="main__buttons-container">
                        <NavLink exact className = 'main__button btn-primary' to = '/create'>Создать заметку</NavLink>
                        <NavLink exact className = 'main__button btn-primary' to = '/note'>Посмотреть заметку</NavLink>
                    </div>
                    <div className="main__about-container">
                                <p className ='main__about-p'><b>ShareNotes</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть.
                            После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
                                <p className ='main__about-p'>Как сделать заметку? </p>
                                <ul className ='main__about-ul'>
                                    <li className ='main__about-li'>Пройдите по ссылке</li>
                                    <li className ='main__about-li'>Вставьте текст и нажмите "Создать"</li>
                                    <li className ='main__about-li'>Отправьте сгенерированный адрес другу!</li>
                                </ul>
                                <p className ='main__about-p'>Как прочитать заметку? Перейдите по присланной ссылке, либо введите адрес руками здесь.</p>
                    </div>
                </div>
            </div> 
        </main>
    );
}
  
export default Main;  