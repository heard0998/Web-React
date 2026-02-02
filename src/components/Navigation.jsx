import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
    const location = useLocation()

    return (
        <nav className="navigation">
            <div className="nav-container">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    <span className="nav-icon">🏠</span>
                    <span className="nav-text">หน้าหลัก</span>
                </Link>
                <Link
                    to="/examples"
                    className={`nav-link ${location.pathname === '/examples' ? 'active' : ''}`}
                >
                    <span className="nav-icon">📝</span>
                    <span className="nav-text">ตัวอย่างโจทย์</span>
                </Link>
                <Link
                    to="/history"
                    className={`nav-link ${location.pathname === '/history' ? 'active' : ''}`}
                >
                    <span className="nav-icon">🧑</span>
                    <span className="nav-text">ประวัตินักวิทยาศาสตร์</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation
