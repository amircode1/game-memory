import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalGame({handleClick,show}) {
    if (!show) return null;
  return (
    <> 
    <Modal
    show={show}
    size="sm"
    aria-labelledby="example-modal-sizes-title-sm"
    variant="flex justify-content-center align-items-center">
        <Modal.Header>
        <Modal.Title id="example-modal-sizes-title-sm">
            you won!
            <Button variant="primary" onClick={handleClick}>
                reset
            </Button>
        </Modal.Title>
        </Modal.Header>
    </Modal>
    </>
  );
}
export default ModalGame;