import './Modals.css';

function Modals(props) {

    function clickCross() {
        let modal = document.querySelector('.modal');
        modal.style.display = 'none';
        hideAllModals();
    }

    function modalOutClick(event) {
        let target = event.target;
        let modal = document.querySelector('.modal');

        if (target === modal) {
            modal.style.display = 'none';
            hideAllModals();
        }
    }

    function hideAllModals() {
        let modalContent = document.querySelector('.modal__content');
        let modalContentChildren = modalContent.children;
        let modalClose = document.querySelector('.modal__close');

        for (let child of modalContentChildren) {
            child.style.display = 'none';
        }
 
        modalClose.style.display = 'block';
    }


    return(
        <div className="modal" onMouseUp = {modalOutClick}>
            <div className="modal__content">
                <div className="modal-wrapper modal__warning">
                    <p className = 'modal__warning-text'>Заполните поле</p>
                </div>
                <button className="modal__close" onClick = {clickCross}></button>
            </div> 
        </div> 
    );
   
}

export default Modals;