
function checkCities(ch) {
    function check(data) {
      for (i = 0; i < data.length; i++) {
        if (data[i].name[0].toLowerCase() == ch)
          console.log(data[i].name);
      }
    }
    fetch("https://raw.githubusercontent.com/attainu-falcon/attainu-falcon/master/coding-challenges/cities.json")
      .then((arr) => arr.json())
      .then(check)
      .catch((err) => console.log(err));
  }
  checkCities('e');