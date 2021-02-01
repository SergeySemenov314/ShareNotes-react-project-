import './Create.css';
import React from 'react';
import {useState} from 'react';
import env from '../../env.json';  


function Create() {

  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');

  
  let sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      if (response.result) {
        setUrl(env.url + response.url);
      }
    })
  }

  let loadDataFromForm = (evt) => {
    evt.preventDefault();
    let note = evt.target.elements.note.value;
    note = note.trim();
    if (note === ''){
      showWarning();
      return false;
    }
    sendData({'note': note})

  }

  let clickHandlerReload = () => {
    setFormClass('');
    setLineClass('hide');
  }

  function showWarning() {
    let modal = document.querySelector('.modal');
    let modalWarning = document.querySelector('.modal__warning');
    modal.style.display = 'block';
    modalWarning.style.display = 'block';
  }

    return (
      <>
        <div className = 'container'>
          <div className="create">
            <form onSubmit = {loadDataFromForm} className = {formClass}>
              <label htmlFor="note" className = 'create__label'>Введите заметку:</label>
              <textarea name="note" id="note" placeholder = 'Test' className = 'create__textarea input'></textarea>
              <p className = 'create__length-warning'><b>Внимание!</b> Максимальная длина заметки 1000 символов.</p>
              <div className = 'button-wrapper-right'>
                <button className = 'btn-primary'>Создать</button>
              </div>
            </form>
            <div className = {lineClass}>
              <p className = 'create__url alert alert_primary'>{url}</p>
              <p className = 'create__url-warning'>Скопируйте ссылку и передайте адресату. Внимание! Посмотреть заметку можно только один раз!</p>
              <div className = 'button-wrapper-right'>
                <button onClick = {clickHandlerReload} className = 'btn-primary'>Создать новую заметку</button>
              </div>
            </div>
          </div>    
        </div>
        
      </>
    );
}
  
export default Create;  