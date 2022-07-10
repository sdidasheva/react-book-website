import React, { useState } from "react";
import AddBook from "../components/addbook"
import BookCard from "../components/bookCard"
import Footer from "../components/footer";
import { Modal, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa"
import "../styles/booklist.css"

export default function BookList() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <div className="booklist">
                <div className="booklist_wrapper">
                    <div className="d-grid gap-2 add_block" >
                        <Button onClick={handleShow} className="buttonFont"
                            variant="secondary" size="lg" data-toggle="modal"><FaPlus /> <span>Добавить прочитанное</span></Button>
                    </div>
                    <BookCard />
                    <Footer />
                </div>
            </div>

            <Modal size="lg" centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Прочитанное
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBook />
                </Modal.Body>
            </Modal>
        </>
    )
}