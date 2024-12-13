import React from 'react';
import Matching from './components/Matching';
import Calendar from './components/Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container">
            <h1 className="text-center my-4">SkillSwap</h1>
            <Matching />
            <Calendar />
        </div>
    );
}

export default App;
