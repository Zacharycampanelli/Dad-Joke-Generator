import { useState, useEffect } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');

  const getJoke = async () => {
    setError('');
    // try {
    const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
      },
    });

    //   if (!response.ok) {
    //     throw new Error('Something went wrong. Please try again');
    //   }
    const data = await response.json();
    console.log(data);
    //   setJoke(data);
    //   console.log(joke)
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {joke && <p>Joke: {joke}</p>}
    </div>
  );
};

export default Joke;
