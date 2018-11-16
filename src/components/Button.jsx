import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className={props.className} onClick={props.onClick} {...props}>
            {
                props.icon ? <i className="material-icons">{props.icon}</i> : props.children
            }

        </button>
    );
};

Button.propsTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any
};

export default Button;