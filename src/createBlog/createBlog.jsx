import React, { useState, setShow } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './createBlog.css';

function CreateBlog(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props);

    return (
        <div>
            <div class="button-add">
            <Button variant="primary" onClick={handleShow}>
                Add blog
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="Form">
                        <h3>write a new blog</h3>
                        <form onSubmit={props.handleFormSubmit}>
                            <div>
                                <label htmlFor="BlogUser">
                                    <p>BlogUser:</p>
                                    <input id="BlogUser" value={props.newBlogUser}
                                        type="text" name="BlogUser"
                                        onChange={props.handleInputChange}
                                        style={{ marginRight: '5px' }} />
                                </label>
                                <label for="Title">
                                    <p>Title:</p>
                                    <input id="title"
                                        value={props.newTitle}
                                        type="text" name="Title"
                                        onChange={props.handleInputChange} />
                                </label>
                            </div>
                            <div>
                                <label for="BlogContent">
                                    <p>Write Blog:</p>
                                    <textarea id="BlogContent" rows="25" cols="35"
                                        value={props.newBlogContent}
                                        type="text" name="BlogContent"
                                        onChange={props.handleInputChange} />
                                </label>
                            </div>
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