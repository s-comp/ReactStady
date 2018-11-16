import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="What do you need to do?" />
                <Button className="btn btn-add" type="submit">Add</Button>
            </form>
        );
    }
}

Form.propType = {

};

export default Form;