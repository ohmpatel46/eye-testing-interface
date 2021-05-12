import React,{useState,useRef} from 'react';
import Question from './question';
import {Link} from 'react-router-dom';

const Testcontainer = ({questions,score,setScore})=>{
    const inputRef=useRef(null);
    const nextRef=useRef(null);
    const [index,setIndex]=useState(0);
    const [submitlink,setSubmitLink]=useState("/test");
    const nextHandler=(e)=>{
        if(index===4){
            setSubmitLink("/result");
            nextRef.current.style.display="none";
        }
        console.log(inputRef);
        if(inputRef.current.value===questions[index].content){
            setScore(score+10);
        }
        inputRef.current.value='';
        setIndex(index+1);
    };
    return(
        <div className="testcontainer">
            <h2>Can you read the text below clearly?</h2>
            <Question question={questions[index]}/>
            <input ref={inputRef} type="text" placeholder="Your Answer..."></input>
            <div>
            <button ref={nextRef} onClick={nextHandler}>Next</button>
            <Link to={submitlink}><button>Submit</button></Link>
            </div>
            <h2>Score: {score}/60</h2>
        </div>
    );
};

export default Testcontainer;