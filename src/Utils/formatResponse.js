import fetchData from "./useFetch";

const formatResponse = (char) => {
  return {
    name: char.name,
    height: `${Math.round(char.height * 0.393701)} in`,
    weight: `${Math.round(char.mass * 2.20462)} lbs`,
    hair: char.hair_color,
    birthdate: char.birth_year,
    species: char.species.map((species) => {
      return {
        name: species.name,
      };
    }),
    films: char.films.map((film) => {
      return {
        title: film.title,
        episode: film.episode_id,
      };
    }),
    url: char.url,
    starships: char.starships.map((ship) => {
      return {
        name: ship.name,
        class: ship.starship_class,
      };
    }),
    vehicles: char.vehicles.map((vehicle) => {
      return {
        name: vehicle.name,
        model: vehicle.model,
      };
    }),
  };
};

async function formatCharacter(character, i) {
  character.id = i;

  try {
    // these should be refactored into a reusable function
    character.films = await Promise.all(
      character.films.map(async (url) => {
        return fetchData(url);
      })
    );
    character.starships = await Promise.all(
      character.starships.map(async (url) => {
        return fetchData(url);
      })
    );
    character.species = await Promise.all(
      character.species.map(async (url) => {
        return fetchData(url);
      })
    );

    character.vehicles = await Promise.all(
      character.vehicles.map(async (url) => {
        return fetchData(url);
      })
    );

    return formatResponse(character);
  } catch (err) {
    console.log(err);
  }
}

export default formatCharacter;
