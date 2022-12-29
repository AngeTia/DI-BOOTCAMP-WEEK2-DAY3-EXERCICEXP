/*------------------------Exercise 1 : List Of People------------------------------------*/

// Part I - Review About Arrays

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people[2] = "Jason";
people.push("Tia");
console.log(`L'index de "Mary" est : ${people.indexOf("Mary")}`);
peopleNew = people.slice(1);
console.log(`L'index de "Foo" est :${people.indexOf("Foo")} car "Foo" n'est pas dans le tableau`);
let last = people[people.length -1];
console.log(last);

// Part II - Loops

// 1. Using a loop, iterate through the people
people.forEach(element => console.log(element))

// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if(people[i] == "Jason"){
        break;
    }
}

/*----------------------------Exercise 2 : Your Favorite Colors--------------------------*/

// 1.Create an array called colors
const colors = ["red", "yellow", "blue", "green"];

// 2. Loop through the array and as you loop console.log a string
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`);
}
// 3. Bonus
const valIn = ["1st", "2nd", "3rd", "4th"];
for (let i = 0; i < valIn.length; i++) {
    console.log(`My ${valIn[i]} choice is ${colors[i]}`);
}

/*--------------------------Exercise 3 : Repeat The Question----------------------------*/

// 1. Prompt the user for a number.
let userNumber = prompt("Entrez un numero: ");
console.log(`Le type de l'entrée est : ${typeof(userNumber)}`)

// 2. While the number is smaller than 10 continue asking 
while (userNumber < 10) {
    userNumber = prompt("Entrez un autre nombre");
    if (userNumber > 10){
        alert(`Superbe votre nombre n° ${userNumber} > 10  est !!!`);
    }
}

/*-----------------------Exercise 4 : Building Management---------------------*/

// 1. Copy and paste the above object to your Javascript file.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2. Console.log the number of floors in the building.
console.log(`Le nombre d'étage est : ${building.numberOfFloors}`)

// 3. Console.log how many apartments are on the floors 1 and 3.
console.log(`Le nombre d'appartement à l'étage 1 est : ${building.numberOfAptByFloor.firstFloor}`)
console.log(`Le nombre d'appartement à l'étage 3 est : ${building.numberOfAptByFloor.thirdFloor}`)

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`Le nom du deuxième locataire est : ${building.nameOfTenants[1]}
Le nombre de pièce de son appartement est : ${building.numberOfRoomsAndRent.dan[0]}`)

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
verifyRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if ( verifyRent > building.numberOfRoomsAndRent.dan[1]){
    newRent = building.numberOfRoomsAndRent.dan[1] + 200
    console.log(`Le loyer de Dan passe à : ${newRent}`)
}

/*----------------------------Exercise 5 : Family---------------------------------*/

// 1. Create an object called family with a few key value pairs.
const family = {
    firstChild: 'Tia',
    secondChild: 'Ange',
    thirdChild: 'Gompou'
}

// 2. Using a for in loop, console.log the keys of the object.
for (const property in family) {
    // Les clés de la classe "family"
    console.log(`${property}`)
}

// 3. Using a for in loop, console.log the values of the object.
for (const property in family){
    // Les valeurs des clés
    console.log(`${family[property]}`)
}

/*--------------------------Exercise 6 : Rudolf----------------------------------*/

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let newDetail = Object.entries(details) 
// 1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for (let i=0; i< newDetail.length; i++) {
    for (let j=0; j< newDetail[i].length;j++){
        console.log(newDetail[i][j])
    }
}

/*-------------------------Exercise 7 : Secret Group--------------------------------*

A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”*/

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();
firtsIndex = `${names[0][0]}${names[1][0]}${names[2][0]}${names[3][0]}${names[4][0]}${names[5][0]}`
console.log(firtsIndex);