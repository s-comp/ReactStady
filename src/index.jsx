import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import todos from './todos';
import './style/index.scss';
import Header from "./components/Header";
import ToDo from "./components/ToDo";

function App(props) {
    return (
        <main>
            <Header title={props.title} />
            <section className="todo-list">
                {
                    props.todos.map(todo => <ToDo key={todo.id} title={todo.title} completed={todo.completed} />)
                }
            </section>
        </main>
    )
}

App.propTypes = {
    title: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React ToDo'
};


ReactDOM.render(<App todos={todos}/> , document.getElementById('root'));
