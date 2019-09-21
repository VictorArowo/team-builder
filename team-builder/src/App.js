import React, { useState } from 'react';
import Team from './Team';

const App = () => {
  const [teams, setTeams] = useState(1);
  return (
    <div>
      <h1>Teams</h1>
      <button onClick={() => setTeams(teams + 1)}>Add Team</button>
      {[...Array(teams)].map((_, i) => (
        <Team team={i + 1} />
      ))}
    </div>
  );
};

export default App;
