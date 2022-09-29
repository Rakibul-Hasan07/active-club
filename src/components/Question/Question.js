import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-component'>
            <div className='single-question'>
                <h1>How does React works</h1>
                <p>React is a JavaScript library for building user interfaces. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='single-question'>
                <h1>Difference between props and state</h1>
                <p>Props: The Data is passed from one component to another.It is Immutable.Props can be used with state and functional components.Props are read-only.</p>
                <p>State: The Data is passed within the component only.It is Mutable.State can be used only with the state components/class component.State is both read and write.</p>
            </div>
            <div className='single-question'>
                <h1>useEffect what can be done other than data load</h1>
                <p>Running on state change: validating input field.
                    Running on state change: live filtering.
                    Running on state change: trigger animation on new array value.
                    Running on props change: update paragraph list on fetched API data update.</p>
            </div>
        </div>
    );
};

export default Question;