import React, { useState } from "react";

function Randomizer({ setCurrentChallenge }) {
  const [challenges, setChallenges] = useState([]);
  const [newChallenge, setNewChallenge] = useState("");

  const addChallenge = () => {
    if (newChallenge.trim()) {
      setChallenges([...challenges, newChallenge]);
      setNewChallenge("");
    }
  };

  const getRandomChallenge = () => {
    if (challenges.length > 0) {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      setCurrentChallenge(challenges[randomIndex]);
    } else {
      alert("No challenges available!");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={newChallenge}
        placeholder="Enter a new challenge"
        onChange={(e) => setNewChallenge(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "1rem",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={addChallenge}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          background: "#63B4FF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add Challenge
      </button>
      <button
        onClick={getRandomChallenge}
        style={{
          padding: "10px 20px",
          margin: "10px",
          fontSize: "1rem",
          background: "#63B4FF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Get Random Challenge
      </button>
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {challenges.map((challenge, index) => (
          <li key={index} style={{ fontSize: "1.2rem", margin: "5px 0" }}>
            {challenge}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Randomizer;