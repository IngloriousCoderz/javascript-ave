async function fetchDataInSeries() {
  try {
    const response1 = await fetch("https://www.swapi.tech/api/people/1/");
    const data1 = await response1.json();

    const response2 = await fetch("https://www.swapi.tech/api/people/2/");
    const data2 = await response2.json();

    console.log(data1, data2);
  } catch {
  } finally {
  }
}

fetchDataInSeries();

async function fetchDataInParallel() {
  const [response1, response2] = await Promise.all([
    fetch("https://www.swapi.tech/api/people/1/"),
    fetch("https://www.swapi.tech/api/people/2/"),
  ]);

  const [data1, data2] = await Promise.all([
    response1.json(),
    response2.json(),
  ]);

  console.log(data1, data2);
}

fetchDataInParallel();

async function fetchPerson(id) {
  const response = await fetch(`https://www.swapi.tech/api/people/${id}/`);
  const data = await response.json();
  return data;
}

// this is wrong: fetchPerson returns a promise!
// console.log(fetchPerson(1));

fetchPerson(1).then((data) => {
  console.log(data);
});

async function fetchPeople() {
  const people = await Promise.all([fetchPerson(1), fetchPerson(2)]);
  console.log(people);
}

fetchPeople();
