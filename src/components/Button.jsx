import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className={props.className} icon={props.icon}>
            <i className="material-icons">{props.icon}</i>
        </button>
    );
}

Button.propsTypes = {
    className: PropTypes.string,
    icon: PropTypes.string
};

export default Button;