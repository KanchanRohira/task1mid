import React, { useState } from 'react';

const UserParticipation = () => {
  const [question, setQuestion] = useState('What is your favorite color?');
  const [choices, setChoices] = useState([
    { id: 1, text: 'Red', votes: 0 },
    { id: 2, text: 'Blue', votes: 0 },
    { id: 3, text: 'Green', votes: 0 },
  ]);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (selectedChoice === '') {
      alert('Please select an answer choice!');
      return;
    }

    if (hasVoted) {
      alert('You have already voted!');
      return;
    }

    setChoices((prevChoices) =>
      prevChoices.map((choice) =>
        choice.id === selectedChoice ? { ...choice, votes: choice.votes + 1 } : choice
      )
    );

    setHasVoted(true);
  };

  const handleChoiceChange = (e) => {
    setSelectedChoice(parseInt(e.target.value));
  };

  return (
    <div>
      <h2>{question}</h2>
      <form>
        {choices.map((choice) => (
          <div key={choice.id}>
            <input
              type="radio"
              id={`choice-${choice.id}`}
              name="choice"
              value={choice.id}
              checked={selectedChoice === choice.id}
              onChange={handleChoiceChange}
              disabled={hasVoted}
            />
            <label htmlFor={`choice-${choice.id}`}>{choice.text}</label>
          </div>
        ))}
      </form>
      <button onClick={handleVote} disabled={hasVoted}>
        Vote
      </button>
      <div>
        <h3>Vote Count:</h3>
        <ul>
          {choices.map((choice) => (
            <li key={choice.id}>
              {choice.text}: {choice.votes}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserParticipation;
