import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import ChallengeList from "./components/ChallengeList";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Stream Event Randomizer</h1>
        <div className="flex justify-center mb-6">
          <label className="mr-4">Select Game:</label>
          <select
            value={game}
            onChange={(e) => setGame(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white border border-gray-600"
          >
            <option value="Call of Duty">Call of Duty</option>
            <option value="Fortnite">Fortnite</option>
            <option value="Apex Legends">Apex Legends</option>
            <option value="Overwatch">Overwatch</option>
          </select>
        </div>
        <Timer />
        <ChallengeList
          challenges={gameSpecificChallenges}
          onAddChallenge={handleAddChallenge}
          onDeleteChallenges={handleDeleteChallenges}
        />
      </div>
    </div>
  );
};

export default App;

