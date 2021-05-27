import React from "react";

const WorldTable = ({ world, tableName, sorted, state }) => {
  let worldPlayers = [];
  world.map((element) => element.scores.map((item) => worldPlayers.push(item)));

  return (
    <div className="country mb-3">
      <h2>HIGH SCORES: {tableName}</h2>
      <div className="player">
        {worldPlayers.sort(sorted[state].fn).map((player, index) => {
          return (
            <table key={player.n} className="table table-borderless">
              <tbody>
                <tr key={index} className="table-row text-right p-2">
                  <td key={player.s} className="text-uppercase">
                    {player.n}
                  </td>
                  <td key={player.n} className="score text-bold text-danger">
                    {player.s}
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default WorldTable;
