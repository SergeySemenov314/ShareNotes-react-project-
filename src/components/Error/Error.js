import './Error.css'

function Error() {
    return (
      <div className = 'container'>
        <div className="error">
          <p className = 'error__p alert alert_primary'>404 такой страницы не существует</p>
        </div>       
      </div>
    );
}
  
export default Error;  