import { useState } from 'react';

const LandingPage = () => {
  const [score, setScore] = useState(500);

  const onButtonClick = () => {
    setScore(score);
  };
  return (
    <>
      Welcome to Card keeper!
      <h1>{score}</h1>
      <button onClick={onButtonClick}>Test</button>
    </>
  );
};

export default LandingPage;
