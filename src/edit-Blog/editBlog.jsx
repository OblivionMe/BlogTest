import React, {useState, setShow} from 'react'
import {Button, Modal} from 'react-bootstrap'

const EditBlog = (props) => {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
        view
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {props.item.Title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
           {props.item.BlogContent}
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  export default EditBlog