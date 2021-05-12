import React,{useRef} from 'react';
import {Link} from 'react-router-dom';

const Result=({score})=>{
    const passfail=()=>{
        let status="";
        if(score>40){
            status="passed";

        }
        else{
            status="failed";
            
        }
        return(status);
    };
    return(
        <div class="result-container">
            <h2>Thank you for giving the test!</h2>
            <h3>You {passfail()}!</h3>
            <Link to="/test"><button>Retry Test</button></Link>
        </div>
    );
};

export default Result;