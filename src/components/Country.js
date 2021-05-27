import React from 'react'

const Country = ({ scores }) => {
    scores.sort((a, b) => (a.name < b.name ? -1 : 1));
    <>
      {scores.map((country, idx) => {
          return (
               <div key={country.name} className="country mb-3">
            <h2 key={idx}>HIGH SCORES: {country.name}</h2>
            </div>
          );
      })}
    </>
        
}


export default Country;


