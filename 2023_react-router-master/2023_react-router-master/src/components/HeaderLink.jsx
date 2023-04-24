import React from "react";
import '../css/headerlink.css'
import { Link, NavLink } from 'react-router-dom'

export default function HeaderLink() {
    return (
        <div className="navlink">
            <NavLink
                className={({isActive})=>isActive ? "link-style" : undefined}
                to="/home">
                Home
            </NavLink>
            <NavLink
                className={({isActive})=>isActive ? "link-style" : undefined}
                to="/story">
                Story
            </NavLink>
            <hr />
        </div>
    )
}
