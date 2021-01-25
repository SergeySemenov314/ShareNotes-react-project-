import React from 'react';
import {useState} from 'react';
import env from '../env.json';  

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
      console.log(response);
      if (response.result) {
        setUrl(env.url + response.url);
      }
    })
  }

  let loadDataFromForm = (evt) => {
    evt.preventDefault();
    let note = evt.target.elements.note.value;
    note = note.trim();
    console.log(note);
    if (note === ''){
      alert('Заполните поля');
      return false;
    }
    sendData({'note': note})

  }

  let clickHandlerReload = () => {
    setFormClass('');
    setLineClass('hide');
  }

    return (
      <div>
        <form onSubmit = {loadDataFromForm} className = {formClass}>
          <label htmlFor="">Введите заметку</label>
          <textarea name="note" id="note" defaultValue = 'Test'></textarea>
          <button>Создать</button>
        </form>
        <div className = {lineClass}>
          {url}
          <div><button onClick = {clickHandlerReload}>Создать новую заметку</button></div>
        </div>
      </div>
    );
}
  
export default Create;  