const anArrayOfString = ["Anja", "Eric", "Olof", "Michaela"];

for (let index = 0; index < anArrayOfString.length; index++) {
  anArrayOfString[index] = index;
  const currentName = anArrayOfString[index];
  console.log('Current name: ', currentName)
}

const anArrayOfNumbers = [100, 200, 300, 400, 500, 600, 700];
console.log('anArrayOfNumbers Length: ', anArrayOfNumbers.length);

for (let index = 0; index < anArrayOfNumbers.length; index++) {
  const currentNumber = anArrayOfNumbers[index];
  console.log('Current number: ', currentNumber);
  console.log('Current number times 10: ', currentNumber * 10);
}

const anArrayOfBooleans = [true, false, true, true, false, true]
console.log('anArrayOfBooleans: ', anArrayOfBooleans)

for (let index = 0; index < anArrayOfBooleans.length; index++) {
  const currentBoolean = anArrayOfBooleans[index];
  console.log('Current boolean: ', currentBoolean);
  if(currentBoolean){
    console.log('True: ', "Du hade rätt");
  } else {
    console.log('Fel: ', "Du hade fel")
  }
}

const arrayOfPeople = [
  {
    firstName: "Anja",
    lastName: "Edman",
  },
  {
    firstName: "Eric",
    lastName: "Westman",
    age: 150,
  },
  {
    firstName: "Olof",
    lastName: "92",
    age: 22,
  },
  {
    firstName: "Michaela",
    lastName: "Malis",
    age: 20,
  },
]

console.log('Array Of People: ', arrayOfPeople)
console.log('Array Of People Length: ', arrayOfPeople.length)

for (let index = 0; index < arrayOfPeople.length; index++) {
  const currentPerson = arrayOfPeople[index];

  if(currentPerson.firstName == "Olof"){
    console.log('Age: ', currentPerson.age, index)
  } else {
    console.log('This person has no age!')
  }

}