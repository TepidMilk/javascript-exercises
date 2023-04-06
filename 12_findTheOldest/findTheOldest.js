const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    let persons = []
    let date = new Date
    for (i = 0; i < people.length; i++){
        let person = people[i]
        person.yearOfDeath ?
        persons.push(person) : 
        person.yearOfDeath = date.getFullYear()
        console.log(person.yearOfDeath)
        persons.push(person)
    }
    let oldestPerson = persons.reduce((currentOldest, currentIndex) => 
    ((currentOldest.yearOfDeath - currentOldest.yearOfBirth) < (currentIndex.yearOfDeath - currentIndex.yearOfBirth)) ?
    currentIndex : currentOldest)
    console.log(oldestPerson)
    return oldestPerson
};

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
