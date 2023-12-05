class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  //   static whoIsBigger(x, y) {
  //     return x.age > y.age
  //       ? x.firstName + " è più vecchio di " + y.firstName
  //       : y.firstName + " è più vecchio di " + x.firstName;
  //   }
  whoIsBigger(y) {
    return this.age > y.age
      ? this.firstName + " è più vecchio di " + y.firstName
      : y.firstName + " è più vecchio di " + this.firstName;
  }
}

const persona1 = new User("Hachim", "Ennaji", 30, "Torino");
const persona2 = new User("Cataldo", "Baglio", 57, "Bergamo Alta");
const persona3 = new User("Giovanni", "Storti", 25, "Torino");
console.log(persona1);
console.log(persona2);
console.log(persona3);
// console.log(User.whoIsBigger(persona3, persona1));
console.log(persona3.whoIsBigger(persona1));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static sharedPet(owner1, owner2) {
    return owner1.ownerName === owner2.ownerName ? true : false;
  }
}

window.onload = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const petName = document.getElementById("petName");
    const ownerName = document.getElementById("ownerName");
    const species = document.getElementById("species");
    const breed = document.getElementById("breed");

    showPet(petName.value, ownerName.value, species.value, breed.value);
  });
};
const pet1 = new Pet("scooby-doo", "shaggy", "Dog", "Great Dane");
const pet2 = new Pet("scooby-doo", "shaggy", "Dog", "Great Dane");
console.log(pet1);
console.log(pet2);
console.log(Pet.sharedPet(pet1, pet2));

const showPet = (petName, ownerName, species, breed) => {
  const animals = document.getElementById("pet");
  const pet = document.createElement("div");
  pet.innerHTML = `
                    <ul class="list-unstyled bg-white-50 border-3 border rounded-3 p-3">
                    <li>${petName}</li>
                    <li>${ownerName}</li>
                    <li>${species}</li>
                    <li>${breed}</li>
                    </ul>
                     `;
  animals.appendChild(pet);
  //   animals.appendChild(animal);
};
