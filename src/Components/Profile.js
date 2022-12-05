import React from "react";
import "../App.css";
import propTypes from "prop-types";

export const Profile = ({
  name,
  height,
  weight,
  birthdate,
  hair,
  films,
  species,
  starships,
  vehicles,
  ...props
}) => {
  return (
    <div className="profile_box">
      <ul>
        <h2 className="profile_title">{name}'s Profile</h2>
        {species.length > 0 && (
          <p className="profile_row">
            Species:
            <p>
              {species.map((species, i) => (
                <p key={i}>{species.name}</p>
              ))}
            </p>
          </p>
        )}
        <p className="profile_row">Height: {height} <br></br>
        Weight: {weight} <br></br>
        Birth Date: {birthdate} <br></br>
        Hair Color: {hair}</p>
        {starships.length > 0 && (
          <p className="profile_row">
            Starships:
            <p>
              {starships.map((ship, i) => (
                <p key={i}>
                  {ship.name} - [{ship.class}]
                </p>
              ))}
            </p>
          </p>
        )}
        {vehicles.length > 0 && (
          <p className="profile_row">
            Vehicles:
            <p>
              {vehicles.map((vehicles, i) => (
                <p key={i}>{vehicles.name} - [{vehicles.model}]</p>
              ))}
            </p>
          </p>
        )}
        <p className="profile_row">
          Film Appearances:
          <p>
            {films.map((film, i) => (
              <p key={i}>
                *Episode {film.episode}: {film.title}*
              </p>
            ))}
          </p>
        </p>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: propTypes.string.isRequired,
  height: propTypes.string.isRequired,
  weight: propTypes.string.isRequired,
  birthdate: propTypes.string.isRequired,
  hair: propTypes.string.isRequired,
  films: propTypes.array.isRequired,
  species: propTypes.array.isRequired,
  starships: propTypes.array.isRequired,
};

export default Profile;
