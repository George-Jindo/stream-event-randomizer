import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import ChallengeForm from "./components/ChallengeForm";
import ChallengeList from "./components/ChallengeList";

const App = () => {
  const [challenges, setChallenges] = useState([]);

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

  const addChallenge = (newChallenge) => {
    if (newChallenge.trim() !== "") {
      setChallenges([...challenges, newChallenge.trim()]);
    }
  };

  const deleteChallenge = (challengeToDelete) => {
    setChallenges(challenges.filter((challenge) => challenge !== challengeToDelete));
  };

  const getRandomChallenge = () => {
    if (challenges.length > 0) {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      alert(`Random Challenge: ${challenges[randomIndex]}`);
    } else {
      alert("No challenges available!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Stream Event Randomizer</h1>
      <Timer duration={300} />
      <ChallengeForm onAddChallenge={addChallenge} />
      <ChallengeList challenges={challenges} onDeleteChallenge={deleteChallenge} />
      <button
        onClick={getRandomChallenge}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Get Random Challenge
      </button>
    </div>
  );
};

export default App;