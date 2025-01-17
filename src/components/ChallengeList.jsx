import React, { useState } from "react";

const ChallengeList = ({ challenges, onDeleteChallenges }) => {
  const [selectedChallenges, setSelectedChallenges] = useState([]);

  const handleSelection = (challenge) => {
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
    <div style={{ marginTop: "20px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {challenges.map((challenge, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={selectedChallenges.includes(challenge)}
                onChange={() => handleSelection(challenge)}
              />
              <span style={{ marginLeft: "10px" }}>{challenge}</span>
            </label>
          </li>
        ))}
      </ul>
      {challenges.length > 0 && (
        <button
          onClick={handleDelete}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            background: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Delete Selected
        </button>
      )}
    </div>
  );
};

export default ChallengeList;
