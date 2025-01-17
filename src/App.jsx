import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import ChallengeForm from "./components/ChallengeForm";
import ChallengeList from "./components/ChallengeList";

const App = () => {
  const [challenges, setChallenges] = useState({
    "Call of Duty": [],
    "Fortnite": [],
  });
  const [currentGame, setCurrentGame] = useState("Call of Duty");

  // Load challenges from localStorage on app load
  useEffect(() => {
    const savedChallenges = localStorage.getItem("challenges");
    console.log("Loaded from localStorage:", savedChallenges);
    if (savedChallenges) {
      setChallenges(JSON.parse(savedChallenges));
    }
  }, []);

  // Save challenges to localStorage whenever they change
  useEffect(() => {
    console.log("Saving to localStorage:", challenges);
    localStorage.setItem("challenges", JSON.stringify(challenges));
  }, [challenges]);

  const addChallenge = (challenge) => {
    setChallenges((prev) => ({
      ...prev,
      [currentGame]: [...prev[currentGame], challenge],
    }));
  };

  const deleteChallenges = (selectedChallenges) => {
    setChallenges((prev) => ({
      ...prev,
      [currentGame]: prev[currentGame].filter(
        (challenge) => !selectedChallenges.includes(challenge)
      ),
    }));
  };

  return (
    <div>
      <h1>Stream Event Randomizer</h1>
      <GameSelector
        games={Object.keys(challenges)}
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
      />
      <Timer />
      <ChallengeForm onAddChallenge={addChallenge} />
      <ChallengeList
        challenges={challenges[currentGame]}
        onDeleteChallenges={deleteChallenges}
      />
    </div>
  );
};

export default App;