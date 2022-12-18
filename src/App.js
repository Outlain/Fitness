import './App.css'
import React from 'react';
import { Nav } from './components/Nav'
import { Overview } from './components/Overview';

const App = () => {

    return (
        <div>
            <Nav />
            <Overview />
        </div>
    )
}

export default App;