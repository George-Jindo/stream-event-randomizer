import React from "react";

const GameSelector = ({ games, currentGame, setCurrentGame }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="game-selector" style={{ marginRight: "10px" }}>
        Select Game:
      </label>
      <select
        id="game-selector"
        value={currentGame}
        onChange={(e) => setCurrentGame(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        {games.map((game) => (
          <option key={game} value={game}>
            {game}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GameSelector;
