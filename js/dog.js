const dog = {
    name: "McGarrett",
    species: "dog",
    breed: "beagle/Blue Heeler",
    nicknames: ["McG", "MG", "Macgyver"],
    age: 3,
    favoriteToys: [],

    eat: function (food) {
    },
    jump: function (high) {

    },
    sleep: function (bed) {

      },
    play: function (toy) {
        let squeaky = toy.includes("squeaky")
       if (squeaky === true ) {
        this.favoriteToys.push(toy)   
        alert("He liked the toy");
       }
       else {
        alert("He doesn't like the toy")
       }
    }
    }

dog.eat()
dog.jump()
dog.play("play squeaky ball")
dog.play("play ball")
dog.sleep()
console.log(dog.favoriteToys)
