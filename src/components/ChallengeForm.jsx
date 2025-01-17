import React, { useState } from "react";

const ChallengeForm = ({ onAddChallenge }) => {
  const [newChallenge, setNewChallenge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddChallenge(newChallenge);
    setNewChallenge("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        type="text"
        value={newChallenge}
        onChange={(e) => setNewChallenge(e.target.value)}
        placeholder="Enter a challenge"
        style={{ padding: "10px", fontSize: "16px", width: "250px" }}
      />
      <button
        type="submit"
        style={{ marginLeft: "10px", padding: "10px 20px" }}
      >
        Add Challenge
      </button>
    </form>
  );
};

export default ChallengeForm;