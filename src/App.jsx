import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ExamplesPage from './pages/ExamplesPage'
import HistoryPage from './pages/HistoryPage'

function App() {
    return (
        <Router basename="/web">
            <div className="app">
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/examples" element={<ExamplesPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
