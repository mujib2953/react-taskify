import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

import "./styles.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos,
}) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {(provided, snapshot) => (
                    <div
                        className={`todos ${
                            snapshot.isDraggingOver ? "drag-active" : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Active Tasks</span>
                        <div>
                            {todos.map((t, index) => (
                                <SingleTodo
                                    index={index}
                                    key={t.id}
                                    todo={t}
                                    todos={todos}
                                    setTodos={setTodos}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>

            <Droppable droppableId="TodosRemove">
                {(provided, snapshot) => (
                    <div
                        className={`todos remove ${
                            snapshot.isDraggingOver ? "drag-complete" : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.innerRef}
                    >
                        <span className="todos__heading">Completed Tasks</span>
                        <div>
                            {completedTodos.map((t, index) => (
                                <SingleTodo
                                    index={index}
                                    key={t.id}
                                    todo={t}
                                    todos={completedTodos}
                                    setTodos={setCompletedTodos}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;
