import React from 'react'
import HeaderLink from '../components/HeaderLink'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <HeaderLink/>
            <Outlet/>
        </div>
    )
}
