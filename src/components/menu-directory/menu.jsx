import React from 'react';
import './menu.scss';

const MenuDirectory = (props) => (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{props.title}</h1>
            <span className="subtitle">Shop NOW</span>
        </div>
    </div>
)

export default MenuDirectory