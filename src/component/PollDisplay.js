import React, { useState } from 'react';

const Polldisplay = () => {
  const [questionss, setQuestion] = useState('your current semester is ?');
  const [choices, setChoices] = useState([
    { id: 1, text: 'First', votes: 0 },
    { id: 2, text: 'second', votes: 0 },
    { id: 3, text: 'third', votes: 0 },
    {id: 4, text: 'fourth', votes:0},
    {id: 5, text: 'fifth', votes:0},
    {id: 6, text: 'sixth', votes: 0},
    {id: 7,  text: 'seventh', votes: 0},
    {id: 8, text: 'eigth', votes: 0}
  ]);

  const handleVote = (choiceId) => {
    setChoices((prevChoices) =>
      prevChoices.map((choice) =>
        choice.id === choiceId ? { ...choice, votes: choice.votes + 1 } : choice
      )
    );
  };

  return (
    <div>
      <h2>{questionss}</h2>
      <ul>
        {choices.map((choice) => (
          <li key={choice.id}>
            <button onClick={() => handleVote(choice.id)}>{choice.text}</button>
            <span>Votes: {choice.votes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Polldisplay;


 

// provide  code that display a countdown timer starting from 10 and updates every second until caches 0. when  the timer
// reaches 0, display the message"timesup,  in react