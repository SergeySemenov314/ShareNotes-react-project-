import './Note.css';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import env from '../../env.json';  

function Note() {
  let {noteURL} = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');

  useEffect(() => {
    if (noteURL !== undefined){
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({'url' : noteURL})
      })
      .then(response => response.json())
      .then(response => {
        if (response.result) {
          setNoteText(response.note);
          setLineClass('');
          setFormClass('hide');
          setErrorClass('hide');
        } else if (!response.result){
          setLineClass('hide');
          setFormClass('hide');
          setErrorClass('');
        }
      })
      
    } else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
    }
  }, [noteURL]);

  function getNote(evt) {
    evt.preventDefault();
    let url = evt.target.elements.url.value;
    url = url.trim();
    if (url === ''){
      showWarning();
      return false;
    }
    noteURL = url;
    // window.location.href = env.url + url;

    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({'url' : noteURL})
    })
    .then(response => response.json())
    .then(response => {
      if (response.result) {
        setNoteText(response.note);
        setLineClass('');
        setFormClass('hide');
        setErrorClass('hide');
      } else if (!response.result){
        setLineClass('hide');
        setFormClass('hide');
        setErrorClass('');
      }
    })

    evt.target.elements.url.value = '';

  }

  function searchNote() {
    setLineClass('hide');
    setFormClass('');
    setErrorClass('hide');
  }

  function showWarning() {
    let modal = document.querySelector('.modal');
    let modalWarning = document.querySelector('.modal__warning');
    modal.style.display = 'block';
    modalWarning.style.display = 'block';
  }

    return (
      <div className = 'container'>
        <div className="note">
            <div className = {formClass}>
                <form action="" onSubmit = {getNote} className = 'note__form'>
                  <label htmlFor="url" className = 'note__label'>Введите hash заметки</label>
                  <input type="text" name = 'url' id = 'url' className = 'note__input input'/>
                  <div className="button-wrapper-right">
                    <button className = 'btn-primary'>Искать заметку</button>
                  </div>       
                </form>
            </div>
            <div className = {lineClass}>
              <div className="note__show-container alert alert_success">
                <h4 className = 'note__show-hash'>Заметка: {noteURL}</h4> 
                <p className = 'note__show-text'>Текст заметки: {noteText}</p>
                <hr/>
                <p className = 'note__show-warning'>Внимание! Скопируйте заметку. После показа заметка будет удалена!</p>
              </div>  
              <div className="button-wrapper-right">
                <button onClick = {searchNote} className = 'btn-primary'>Посмотреть еще одну заметку</button>
              </div>                
            </div>
            <div className={errorClass}>
              <p className = 'note__notfound-warning alert alert_danger'>Произошла ошибка. Такая заметка не найдена.</p>
              <div className="button-wrapper-right">
                <button onClick = {searchNote} className = 'btn-primary'>Посмотреть еще одну заметку</button>
              </div> 
            </div>     
        </div>  
      </div> 
   
    );
}
  
export default Note;  