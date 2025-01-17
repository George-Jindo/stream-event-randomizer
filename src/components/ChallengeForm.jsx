import React, { useState } from "react";

const ChallengeForm = ({ onAddChallenge }) => {
  const [newChallenge, setNewChallenge] = useState("");

  const handleAddChallenge = () => {
    if (newChallenge.trim()) {
      onAddChallenge(newChallenge);
      setNewChallenge("");
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
    </div>
  );
};

export default ChallengeForm;
