
function checkCities(ch) {
    function check(data) {
      for (i = 0; i < data.length; i++) {
        if (data[i].name[0].toLowerCase() == ch.toLowerCase())
          console.log(data[i].name);
      }
    }
    fetch("cities.json")
      .then((arr) => arr.json())
      .then(check)
      .catch(err => err);
  }
  console.log(checkCities('e'));