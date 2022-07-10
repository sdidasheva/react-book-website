import React, { useState } from "react";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";

export default function AddBook() {
    const [input, setInput] = useState({
        title: '',
        author: '',
        year: '',
        genre: '',
        content: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }
    const reload = () => window.location.reload();
    const handleClick = async (event) => {
        event.preventDefault();
        console.log(input);
        await axios.post('http://localhost:5000/books', {
            title: String(input.title),
            author: String(input.author),
            year: String(input.year),
            genre: String(input.genre),
            content: String(input.content)
        })
            .then((res) => res.data)
        reload()
    }

    return (
        <Form onSubmit={handleClick}>
            <Form.Group className="mb-2">
                <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Название книги..."
                    onChange={handleChange}
                    name="title"
                    value={input.title}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Автор книги..."
                    onChange={handleChange}
                    name="author"
                    value={input.author}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Год..."
                    onChange={handleChange}
                    name="year"
                    value={input.year}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Жанр..."
                    onChange={handleChange}
                    name="genre"
                    value={input.genre}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Control
                    as="textarea"
                    autoComplete="off"
                    placeholder="Заметки..."
                    onChange={handleChange}
                    name="content"
                    value={input.content}
                />
            </Form.Group>
            <Button size="lg" centered variant="secondary" type="submit">Добавить</Button>
        </Form>
    )
}