import React, { useState } from "react";

const ChallengeList = ({ challenges, onAddChallenge, onDeleteChallenges }) => {
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [randomChallenge, setRandomChallenge] = useState(null);
  const [newChallenge, setNewChallenge] = useState("");

  const handleAddChallenge = () => {
    if (newChallenge.trim()) {
      onAddChallenge(newChallenge);
      setNewChallenge("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddChallenge();
    }
  };

  const handleRandomChallenge = () => {
    if (challenges.length > 0) {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      setRandomChallenge(challenges[randomIndex]);
    } else {
      alert("No challenges available to randomize!");
    }
  };

  const toggleChallengeSelection = (challenge) => {
    setSelectedChallenges((prev) =>
      prev.includes(challenge)
        ? prev.filter((item) => item !== challenge)
        : [...prev, challenge]
    );
  };

  const handleDelete = () => {
    onDeleteChallenges(selectedChallenges);
    setSelectedChallenges([]);
  };

  return (
    <div>
      <h2>Challenges</h2>
      {/* Input field and Add Challenge button */}
      <div>
        <input
          type="text"
          value={newChallenge}
          placeholder="Enter a new challenge"
          onChange={(e) => setNewChallenge(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            padding: "10px",
            fontSize: "1rem",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleAddChallenge}
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
          onClick={handleRandomChallenge}
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            fontSize: "1rem",
            background: "#ff5733",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Select Random Challenge
        </button>
      </div>
      {randomChallenge && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#d4edda",
            borderRadius: "5px",
          }}
        >
          <strong>Random Challenge:</strong> {randomChallenge}
        </div>
      )}
      {/* Challenge List */}
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {challenges.map((challenge, index) => (
          <li key={index} style={{ fontSize: "1.2rem", margin: "5px 0" }}>
            <label>
              <input
                type="checkbox"
                checked={selectedChallenges.includes(challenge)}
                onChange={() => toggleChallengeSelection(challenge)}
              />
              {challenge}
            </label>
          </li>
        ))}
      </ul>
      {/* Delete Selected Challenges */}
      <button
        onClick={handleDelete}
        disabled={selectedChallenges.length === 0}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          background: "#dc3545",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Delete Selected Challenges
      </button>
    </div>
  );
};

export default ChallengeList;
