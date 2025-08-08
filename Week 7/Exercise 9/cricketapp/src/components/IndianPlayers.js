
import React from 'react';

const IndianPlayers = () => {
  const T20 = ['Mr. First Player', 'Mr. Second Player', 'Mr. Third Player'];
  const Ranji = ['Mr. Fourth Player', 'Mr. Fifth Player', 'Mr. Sixth Player'];

  const all = [...T20, ...Ranji];

  const ordinal = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {all.filter((_, i) => i % 2 === 0).map((player, i) => (
          <li key={i}>{ordinal[i * 2]} : {player}{i * 2 + 1}</li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul>
        {all.filter((_, i) => i % 2 === 1).map((player, i) => (
          <li key={i}>{ordinal[i * 2 + 1]} : {player}{i * 2 + 2}</li>
        ))}
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {all.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
