import React from 'react';
import PropTypes from 'prop-types';


function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

Header.defaultProps = {
    title: 'React ToDo'
};



export default Header;