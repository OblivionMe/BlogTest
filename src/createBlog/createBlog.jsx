import React, { useState, setShow } from 'react';
import { Button, Modal } from 'react-bootstrap';

function CreateBlog(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add blog
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="Form">
                        <h3>write a new blog to the table:</h3>
                        <form onSubmit={props.handleFormSubmit}>
                            <label htmlFor="BlogUser">
                                BlogUser:
          <input id="BlogUser" value={props.newBlogUser}
                                    type="text" name="BlogUser"
                                    onChange={props.handleInputChange} />
                            </label>
                            <label for="Title">
                                Title:
          <input id="title" value={props.newTitle}
                                    type="text" name="Title"
                                    onChange={props.handleInputChange} />
                            </label>
                            <label for="BlogContent">       
                                Write Blog: 
          <textarea id="BlogContent" value={props.newBlogContent}
                                    type="text" name="BlogContent"
                                    onChange={props.handleInputChange} />
                            </label>
                            <div>
                                <button type="submit" value="Submit" onClick={handleClose}>Add Item</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CreateBlog;