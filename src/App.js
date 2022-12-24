import './App.css'
import { React, useState } from 'react'
import { Overview } from './components/Overview.js';
import Nav from './components/Nav.js';
import { InProgress } from './components/views/InProgress.js';
import { Routes, Route } from 'react-router-dom'

const App = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavToggle = (newValue) => {
        setIsNavOpen(newValue);
    }
    return (
        <div className={isNavOpen ? 'main-main-wrapper' : 'main-main-wrapper'}>
            <Nav isNavOpen={isNavOpen} onToggle={handleNavToggle} />
            <Routes>
                <Route path='/' element={<Overview isNavOpen={isNavOpen} />} />
                <Route path='/inprogress' element={<InProgress />} />

            </Routes>

        </div>
    )
}

export default App;