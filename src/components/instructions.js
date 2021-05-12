import React from 'react';
import {Link} from 'react-router-dom';

const Instructions=()=>{
    return(
        <div className="instruction-container">
            <h2>Instructions to use</h2>
            <p>1. Sit 1 metre away from your laptop screen.</p>
            <p>2. If you do not wear glasses, proceed to start the test normally.</p>
            <p>3. If you already have glasses, wear them while giving the test.</p>
            <p>4. The result will be shown at the end.</p>
            <p>5. Consider consulting a ophthalmologist if you fail the test.</p>
            <Link to="/test"><button>Start Test</button></Link>
        </div>
    );
};

export default Instructions;