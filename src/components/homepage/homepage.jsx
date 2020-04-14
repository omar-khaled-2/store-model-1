import React from 'react';
import './homepage.scss'
import MenuDirectory from '../menu-directory/menu'
const HomePage = (props) => (
    <div className="homepage">
        <div className="directory-menu">
            <MenuDirectory title="HATS" />
            <MenuDirectory title="JACKETS" />
            <MenuDirectory title="SNEAKERS" />
            <MenuDirectory title="WOMENS" />
            <MenuDirectory title="MENS" />
        </div>
    </div>
)
export default HomePage