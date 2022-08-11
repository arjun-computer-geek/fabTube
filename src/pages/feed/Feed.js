import { Sidebar } from 'components'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Feed = () => {
    return (
        <>
            <main className="container">
                <Sidebar />
                <div className="home-content">
                    <Outlet />
                </div>
            </main>
        </>
    )
}
