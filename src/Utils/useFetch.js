async function fetchData(url) {
  return await fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

export default fetchData;
