import React, {useState} from 'react' ;
import {Modal, Button, Form} from "react-bootstrap" ;
import Rating from '../Rating/Rating';


const AddMovie = ({AddFilm}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [rate, setRate] = useState(0);

    const submitChange = () => {
        let newmovie = {
            title: name ,
            posterUrl: image ,
            rate: rate ,
            id: Math.random()
        }

        AddFilm(newmovie)
        setShow(false)
        setName('')
        setImage('')
        setRate('')
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
            <img style={{width:"50px", height:"50px"}} src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18954093.jpg" alt="movie" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><span style={{color:"black"}}>Add your new movie</span></Modal.Title>
        </Modal.Header>
        <Modal.Body><span style={{color:"black"}}>
            <Form>
                <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Enter your title" 
                value={name}
                onChange={(e)=> setName(e.target.value)} />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group>
                <Form.Label>Poster URL:</Form.Label>
                <Form.Control type="text" placeholder="Enter your poster address" 
                value={image}
                onChange={(e)=> setImage(e.target.value)} />
        
                </Form.Group>
            </Form>

            <Form>
                <Form.Group>
                <Form.Label>Rate:</Form.Label>
                <Rating rate={rate} setRate={setRate} />
                </Form.Group>
            </Form>
            
            
            
            
            
            </span></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default AddMovie
