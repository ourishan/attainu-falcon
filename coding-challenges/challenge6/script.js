function check(ch, data) {
  let cities = []
  for (i = 0; i < data.length; i++) {
    if (data[i].name[0].toLowerCase() == ch.toLowerCase())
      cities.push(data[i].name);
  }
  return cities
}

async function checkCities(ch) {

  let cts = await fetch("cities.json")
  let j = await cts.json()
  let sc = await check(ch, j)
  return sc
}

(async () => {
  console.log(await checkCities('i'))
})()