import React, { useState, useEffect } from "react";
import axios from 'axios';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiEditBoxLine } from 'react-icons/ri';
import { Modal, Button } from "react-bootstrap";
import UpdateBook from './updatebook';

export default function Book(props) {
    const [input, setInput] = useState();
    const { _id, title, author, year, genre, content } = props.book;
    const reload = () => window.location.reload();
    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:5000/books/${_id}`)
            .then((res) => res.data);
        reload()
    };

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/books/${_id}`)
                .then((res) => res.data)
                .then((data) => setInput(data.book));
        };
        fetchHandler();
    }, [_id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(input);
        await axios.put(`http://localhost:5000/books/${_id}`, {
            title: String(input.title),
            author: String(input.author),
            year: String(input.year),
            genre: String(input.genre),
            content: String(input.content)
        })
            .then((res) => res.data)
        reload()
    }

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <div className="bookCard" >
                <div className="action">
                    <button onClick={deleteHandler} className="delete"><RiDeleteBin6Line /> </button>
                    <button onClick={handleShow} data-toggle="modal" className="edit"

                    ><RiEditBoxLine /></button>
                </div>
                <h4 className="bookCard_title">{title}</h4>
                <p className="bookCard_author">{author}</p>
                <p className="bookCard_author">{year} год</p>
                <p className="bookCard_author">{genre}</p>
                <p className="bookCard_content">{content}</p>
            </div>

            <Modal size="lg" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Прочитанное
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateBook handleSubmit={handleSubmit} handleChange={handleChange} input={input} />
                </Modal.Body>
            </Modal>
        </>
    )
}