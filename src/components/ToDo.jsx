import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from "./Checkbox";
import Button from "./Button";


function ToDo(props) {
    return (
        <div className={`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox checked={props.completed} />

            <span className="todo-title">{props.title}</span>

            <Button className="delete icon" icon="delete"/>
        </div>
    )
}


ToDo.propsTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default ToDo;