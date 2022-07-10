import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function UpdateBook({ handleSubmit, handleChange, input }) {

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
                <Form.Label>Название книги</Form.Label>
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
                <Form.Label>Автор</Form.Label>
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
                <Form.Label>Год издания</Form.Label>
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
                <Form.Label>Жанр</Form.Label>
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
                <Form.Label>Заметки</Form.Label>
                <Form.Control
                    as="textarea"
                    autoComplete="off"
                    placeholder="Заметки..."
                    onChange={handleChange}
                    name="content"
                    value={input.content}
                />
            </Form.Group>
            <Button size="lg" centered variant="secondary" type="submit">Изменить</Button>
        </Form>
    )
}