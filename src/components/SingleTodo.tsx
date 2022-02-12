import React, { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";

import "./styles.css";

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );

        setEdit(false);
    };

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <form
                    className={`todos__single ${
                        snapshot.isDragging ? "drag" : ""
                    }`}
                    onSubmit={(e) => handleEdit(e, todo.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {todo.isDone ? (
                        <s className="todos__single--text">{todo.todo}</s>
                    ) : edit ? (
                        <input
                            className="todos__single--text"
                            value={editTodo}
                            onChange={({ target: { value } }) =>
                                setEditTodo(value)
                            }
                            ref={inputRef}
                        />
                    ) : (
                        <span className="todos__single--text">{todo.todo}</span>
                    )}

                    <div>
                        <span className="icon">
                            <AiFillEdit
                                onClick={() => {
                                    if (!todo.isDone && !edit) setEdit(!edit);
                                }}
                            />
                        </span>
                        <span className="icon">
                            <AiFillDelete
                                onClick={() => handleDelete(todo.id)}
                            />
                        </span>
                        <span className="icon">
                            <MdDone onClick={() => handleDone(todo.id)} />
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    );
};

export default SingleTodo;
