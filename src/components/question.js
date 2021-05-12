import React from 'react';

const Question = ({question})=>{
    const fontsize=question.size + "px";
    return(
        <div className="question">
            {
                <h1 style={{fontSize:fontsize}}>{question.content}</h1>
            }
        </div>
    );
};

export default Question;