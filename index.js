function findMatching(arrayOfDrivers, names) {

    return arrayOfDrivers.filter(match => match.toLowerCase() === names.toLowerCase())
}

function fuzzyMatch(arrayOfDrivers, names){
   return arrayOfDrivers.filter(drivers => drivers.toLowerCase().indexOf(names.toLowerCase()) === 0)

}



function matchName(arrayOfDrivers, string){


   return arrayOfDrivers.filter(driverName => driverName.name === string)

}
