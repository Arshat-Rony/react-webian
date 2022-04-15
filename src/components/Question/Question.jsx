import React from 'react';
import "./Question.css"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Question = (props) => {
    const { question, answer } = props.question;
    const { number } = props;
    return (
        <div className='question text-start mx-auto mt-5'>
            <h3>
                <FontAwesomeIcon style={{ color: "#607D8B" }} className='me-3' icon={faChevronDown}></FontAwesomeIcon>
                Question {number + 1} : <span>{question}</span></h3>
            <p className='mt-3'>Answer : {answer}</p>
        </div>
    );
};

export default Question;