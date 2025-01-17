import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import ChallengeForm from "./components/ChallengeForm";
import ChallengeList from "./components/ChallengeList";
import GameSelector from "./components/GameSelector";

const App = () => {
  const [game, setGame] = useState("Call of Duty");
  const [challenges, setChallenges] = useState(() => {
    const saved = localStorage.getItem("challenges");
    return saved ? JSON.parse(saved) : {};
  });

  const handleAddChallenge = (newChallenge) => {
    setChallenges((prevChallenges) => ({
      ...prevChallenges,
      [game]: [...(prevChallenges[game] || []), newChallenge],
    }));
  };

  const handleDeleteChallenges = (selectedChallenges) => {
    setChallenges((prevChallenges) => ({
      ...prevChallenges,
      [game]: (prevChallenges[game] || []).filter(
        (challenge) => !selectedChallenges.includes(challenge)
      ),
    }));
  };

  const gameSpecificChallenges = challenges[game] || [];

  useEffect(() => {
    localStorage.setItem("challenges", JSON.stringify(challenges));
  }, [challenges]);

  return (
    <div style={{ padding: "20px", color: "#fff", backgroundColor: "#282c34" }}>
      <h1>Stream Event Randomizer</h1>
      <label>
        Select Game:{" "}
        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          <option value="Call of Duty">Call of Duty</option>
          <option value="Fortnite">Fortnite</option>
          <option value="Apex Legends">Apex Legends</option>
          <option value="Overwatch">Overwatch</option>
        </select>
      </label>
      <Timer />
      <ChallengeList
        challenges={gameSpecificChallenges}
        onAddChallenge={handleAddChallenge}
        onDeleteChallenges={handleDeleteChallenges}
      />
    </div>
  );
};

export default App;
