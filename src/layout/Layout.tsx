import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Dashboard } from '../components/Dashboard'

type LayoutPropsType = {
    children?: React.ReactNode | React.ReactChild
}

export const Layout: React.FC<LayoutPropsType> = () => {
    return <div className="wrapper">
        <Header />
        <Dashboard />
        <div className="content"><Outlet /></div >
    </div>
}
