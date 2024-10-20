import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Dashboard } from '../components/Dashboard'

type LayoutPropsType = {
    children?: React.ReactNode | React.ReactChild
}

export const Layout: React.FC<LayoutPropsType> = () => {
    return <>
        <Header />
        <Dashboard />
        <div className="wrapper">
            <div className="wrapper_content">
                <Outlet />
            </div>
        </div >
    </>
}
