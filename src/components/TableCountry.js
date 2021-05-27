import React from "react";
import WorldTable from "./WorldTable";

const TableCountry = ({ scores, sortTypes, currentSort, onSortChange }) => {
  
  scores.sort((a, b) => (a.name < b.name ? -1 : 1));
  return (
    <div>
      <button className="btn btn-primary mb-2" onClick={onSortChange}>
        {`${sortTypes[currentSort].class}`}
      </button>
      <WorldTable world={scores} tableName="World-Wide" sorted={sortTypes} state={currentSort}  />
      {scores.map((country, idx) => {
        return (
          <div key={country.name} className="country mb-3">
            <h2 key={idx}>HIGH SCORES: {country.name}</h2>

            <div className="player">
              {country.scores
                .sort(sortTypes[currentSort].fn)
                .map((player, index) => {
                  return (
                    <table key={player.n} className="table table-borderless">
                      <tbody>
                        <tr key={index} className="table-row text-right p-2">
                          <td key={player.s} className="text-uppercase">
                            {player.n}
                          </td>
                          <td
                            key={player.n}
                            className="score text-bold text-danger"
                          >
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
      })}
    </div>
  );
};

export default TableCountry;
