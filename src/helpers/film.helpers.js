export function filterFilmsByDirector(list, director) {
    if(director == "") {
        return list;
    }
    return list.filter((movie) => movie.director == director)
}

export function getListOf(list, prop) {
  //Look at first object
  //write down lastname
  //look at 2nd object
  //write down last name
  //repeat

  //ierate over the array until you select all lastnames
  //store lastname in array
  const lastNameArray = [];
  for (let i = 0; i < list.length; i++) {
    if (!lastNameArray.includes(list[i][prop])) {
      lastNameArray.push(list[i][prop]);
    }
  }
  return lastNameArray;
}
