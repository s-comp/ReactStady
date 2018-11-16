import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {

    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.completed).length;
    let notCompleted = total - completed;

    return(
        <table className="stats">
            <tbody>
            <tr>
                <th>All:</th>
                <td>{total}</td>
            </tr>
            <tr>
                <th>Done:</th>
                <td>{completed}</td>
            </tr>
            <tr>
                <th>Remained:</th>
                <td>{notCompleted}</td>
            </tr>
            </tbody>
        </table>
    );
};

Stats.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Stats;