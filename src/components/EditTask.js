import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../js/action/Action';


function EditTask({todo}) {
    const [show, setShow] = useState(false);
    const [editedTask, setEditedTask] = useState(todo.task);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
     const edit = () => {
      dispatch(editTask(todo.id,editedTask))
      handleClose()
     }
    return (
        <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEditedTask(e.target.value)}
              value={editedTask}
            />
            </Modal.Body>
             <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default EditTask
