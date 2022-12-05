import formatCharacter from './formatResponse';
import fetchData from './useFetch';

const api = 'https://swapi.py4e.com/api/';

export async function querySearch(query) {
  const url = `${api}people/?search=${query}`;
  try {
    let search = await fetchData(url);

    if (search.results.length === 0) {
      throw Error('Please enter a valid search.');
    } else {
      return await Promise.all(
        search.results.map(async (character, i) => {
          return formatCharacter(character, i);
        })
      );
    }
  } catch (err) {
    console.log(err);
    return null;
  }
}