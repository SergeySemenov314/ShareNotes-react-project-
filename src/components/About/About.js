import './About.css';

function About() {
    return (
      <div className = 'container'>
        <div className="about">
          <p className = 'about__p'><b>ShareNotes</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть. После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
        </div>  
      </div>
    );
}
  
export default About;  