import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import env from '../env.json';  

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
        console.log(response);
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
      alert('Заполните поле');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + url;

  }

  function searchNote() {
    window.location.href = env.url;
  }

    return (
      <div>
        <div className = {lineClass}>
          <h4>Заметка:</h4> 
          <p>{noteText}</p>
          <button onClick = {searchNote}>Посмотреть еще одну заметку</button>
        </div>
        <div className={errorClass}>
          <p>Произошла ошибка. Такая заметка не найдена.</p>
        </div>
        <div className = {formClass }>
          <form action="" onSubmit = {getNote}>
            <label htmlFor="">Введите hash заметки</label>
            <input type="text" name = 'url' id = 'url' className = 'form-control'/>
            <button className = 'btn btn-primary'>Искать заметку</button>
          </form>
        </div>
      </div>
    );
}
  
export default Note;  