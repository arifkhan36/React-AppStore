import React from 'react';
import './Navigation.css';

const Navigation = (props) => (
    <div id="myNav" className="overlay">
        <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
        <div className="overlay-content">
             <a href="">phone</a>
             <a href="">laptop</a>
             <a href="">tablet</a>
             <a href="">watch</a>
        </div>
    </div>
);

export default Navigation;