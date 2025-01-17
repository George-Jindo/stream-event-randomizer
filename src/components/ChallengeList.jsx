import React, { useState } from "react";

const ChallengeList = ({ challenges, onAddChallenge, onDeleteChallenges }) => {
  const [newChallenge, setNewChallenge] = useState("");
  const [selectedChallenges, setSelectedChallenges] = useState([]);

  const handleAdd = () => {
    if (newChallenge.trim() !== "") {
      onAddChallenge(newChallenge);
      setNewChallenge("");
    }
  };

  const handleDelete = () => {
    onDeleteChallenges(selectedChallenges);
    setSelectedChallenges([]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Challenges</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={newChallenge}
          onChange={(e) => setNewChallenge(e.target.value)}
          placeholder="Enter a new challenge"
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Add Challenge
        </button>
      </div>
      <ul className="space-y-2 mb-4">
        {challenges.map((challenge, index) => (
          <li
            key={index}
            className={`p-2 rounded bg-gray-700 text-white hover:bg-gray-600 cursor-pointer ${
              selectedChallenges.includes(challenge) ? "bg-gray-600" : ""
            }`}
            onClick={() =>
              setSelectedChallenges((prev) =>
                prev.includes(challenge)
                  ? prev.filter((c) => c !== challenge)
                  : [...prev, challenge]
              )
            }
          >
            {challenge}
          </li>
        ))}
      </ul>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
      >
        Delete Selected Challenges
      </button>
    </div>
  );
};

export default ChallengeList;

