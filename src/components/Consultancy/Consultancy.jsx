import React, { useState } from 'react';
import SingleConsultancy from '../SIngleConsultancy/SingleConsultancy';
import "./Consultancy.css"
import pic1 from "../../images/consultancy/Untitled (2).png"
import pic2 from "../../images/consultancy/Untitled (1).png"
import pic3 from "../../images/consultancy/Untitled.png"
import Question from '../Question/Question';
const image = [pic1, pic2, pic3]

const data = [
    { id: "1", heading: "Submit Your Problem", minHeading: "Feel Free To Express Your Problem", },
    { id: "2", heading: "Work On Problem", minHeading: "Sharing reduces 50% of the Problem", },
    { id: "3", heading: "One to One Consultancy", minHeading: "Direct join to solve your problem", }]
const questions = [
    { id: 1, question: "Webian Consultancy?", answer: "Totaly free online platform where every student of webian get consultation there problem" },
    { id: 2, question: "Is Webian Consultancy totally free?", answer: "Yes ! Totaly free online platform where every student of webian get free solution of there problem" },
    { id: 3, question: "How much time required to get the solution?", answer: "We normally try to give the solution within 6 hours if not possible within 12 hours you will get the solution and if you don't get the solution within 12 hours then mail us" },
    { id: 4, question: "Can I get Zoom Meet Session?", answer: "It is a free consultancy session. First we try to solve your problem by giving you a mail if it becomes fail then we provide a zoom session for each student" },
    { id: 5, question: "Which problem will be rejected?", answer: "We try to solve every problem but we want every student should by his ownself thats why we try not to give the solution of coding" },
    { id: 6, question: "Could I get consultancy after finishing the course?", answer: "Since after buying the course you will become a member of our student academy so you can expect solution lifetime" },
]
const Consultancy = () => {
    const [name, setName] = useState('')
    const [problem, setProblem] = useState('')
    const [error, setError] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleproblems = e => {
        setProblem(e.target.value)
    }

    const handleSubmit = e => {
        e.prevenDefault()

    }
    return (
        <div className='consultancy-container'>
            <div className="consultancy-hero">
                <div className="text ">
                    <h3 className=''>Webian always with the student.</h3>
                    <blockquote>
                        "  Sharing the problem means Solving the problem"
                        <br />
                        ------ webian
                    </blockquote>
                </div>
            </div>
            <div className="consultancy">
                <div className="consultancy-detail">
                    {
                        data.map((item, index) => <SingleConsultancy
                            key={item.id}
                            item={item}
                            number={index}
                            images={image}></SingleConsultancy>)
                    }
                </div>

                <div className="prolem-form mt-5">
                    <div className='problem-submit-form'>
                        <h2 className='form-title'>Submit Your Problem</h2>
                        <form style={{ width: "auto" }} onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="name">Your name</label>
                                <input className='input' onBlur={handleName} type="text" name="name" id="name" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Your email</label>
                                <input className='input' type="email" name="email" id="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="problem">Your Problem</label>

                                <textarea className='input' onBlur={handleproblems} type="text" name="problem" id="problem" required></textarea>
                            </div>


                            <input className='problem-submit-btn' type="submit" value="Submit" />
                            <p style={{ color: "crimson", textAlign: "center" }}>{error && error?.message}</p>
                        </form>


                    </div>
                </div>
                <div className="questions">
                    <h1 className='heading mb-5 heading-about'>Query about Webian</h1>
                    {
                        questions.map((question, index) => <Question
                            key={question.id}
                            question={question}
                            number={index}

                        ></Question>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Consultancy;