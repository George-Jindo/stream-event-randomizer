import React from "react";

const ChallengeList = ({ challenges, onDeleteChallenge }) => {
  return (
    <div>
      <h2>Challenges</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {challenges.map((challenge, index) => (
          <li
            key={index}
            style={{
              margin: "5px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {challenge}
            <button
              onClick={() => onDeleteChallenge(challenge)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                color: "white",
                backgroundColor: "red",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeList;