const API_URL = "https://restcountries.com/v3/all";

const numberoflanguages = async () => {
  const data = await fetch(API_URL).then((response) => response.json());
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].languages);
  }
  console.log("Number of languages in coutry API:", data.length);
};
numberoflanguages();

const mostSpokenLanguages = async (n) => {
  const langSet = new Set();
  const allLangArr = [];
  const languageFrequency = [];

  const data = await fetch(API_URL).then((response) => response.json());

  for (let i = 0; i < data.length; i++) {
    const name = data[i].name;
    allLangArr.push(name);
    langSet.add(name);
  }

  for (l of langSet) {
    const x = allLangArr.filter((ln) => l == ln);
    languageFrequency.push({
      lang: l,
      count: x.length,
    });
  }

  const sortedLanguages = languageFrequency
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
  console.log(`${n} most spoken languages`, sortedLanguages);
};
console.log("Most spoken languages", mostSpokenLanguages(15));

const largestCountries = async (n) => {
  const countriesArea = [];
  const data = await fetch(API_URL).then((response) => response.json());

  for (let i = 0; i < data.length; i++) {
    const name = data[i].name;
    const area = data[i].area;
    countriesArea.push({ Country: name, area });
  }

  const countriesSortByArea = countriesArea
    .sort((a, b) => b.area - a.area)
    .slice(0, n);
  console.log(`${n} most largest countries`, countriesSortByArea);
};
largestCountries(10);
