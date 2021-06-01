class Animal {

    constructor(age, color, weight) {
        this.age    = age
        this.color  = color
        this.weight = weight
    }
    talk() {
        return 'The animal makes some sounds...'
    }
}

class AnimalWithBreed extends Animal {

    constructor(age, color, weight, breed) {
        super(age, color, weight)
        this.breed = breed 
    }
}


class Dog extends AnimalWithBreed {

    constructor(age, color, weight, breed) {
        super(age, color, weight, breed)
        
    }
    talk() {
        return 'Woof!'
    }

    rideOnHippo(hippo) {
        let hippoSound = hippo.talk()
        if (!hippo.isPeaceful) {
            hippo.isPeaceful = true
        }
        console.log('Hippo makes sound ' + hippoSound)
        console.log('The dog makes sound ' + this.talk())
        console.log('Everyone is happy everafter!')
    }
}

class Hippo extends Animal {

    constructor(age, color, weight, isPeaceful) {
        super(age, color, weight)
        this.isPeaceful = isPeaceful
    }
    talk() {
        return 'GROWLLL!!'
    }    
}


class Cat extends AnimalWithBreed {

    constructor(age, color, weight, breed, hasClaws) {
        super(age, color, weight, breed)
        this.hasClaws = hasClaws
    }

    talk() {
        return "Meow"
    }
}


class Direction {
    constructor(dir) {
        this.dir = dir
    }
}

class CareGiver {

    constructor(name, age, yearsOfExperience) {
        this.name = name
        this.age = age
        this.yearsOfExperience = yearsOfExperience
    }

    introduce() {
        return `Hello! My name is ${this.name}, and I am ${this.age} years old. \n
        I have ${this.yearsOfExperience} years of experience`
    }
}

class CareGiverInfo {
    constructor(personName, personAge, personYearsOfExperience) {
        this.personName = personName
        this.personAge = personAge
        this.personYearsOfExperience = personYearsOfExperience
    }
}

class NationalPark {

    constructor(name) {

        this.name = name

        this.southHabitat   = []
        this.westHabitat    = []
        this.northHabitat   = []
        this.eastHabitat    = []
        this.unassignedAnimals = []

        this.availableCareGivers      = []
        this.busyCaregivers           = []
         
    }

    assignCaregiverToPark(careGiverInfo) {
        let careGiver = new CareGiver(careGiverInfo.personName, careGiverInfo.personAge, careGiverInfo.personYearsOfExperience)
        this.availableCareGivers.push(careGiver)

    }

    putAnimalToHabitat(dirObject, animal) {
        let dir = dirObject.dir.toUpperCase()
        let caregiver = this.availableCareGivers.pop()
       
        if (!caregiver) {
            console.log('No available caregivers found.')
            return 
        }
        this.busyCaregivers.push(caregiver)

        switch(dir) {
            case 'NORTH':
                this.northHabitat.push(animal)
                break;
            case 'SOUTH':
                this.southHabitat.push(animal)
                break
            case 'WEST':
                this.westhHabitat.push(animal)
                break
            case 'EAST':
                this.easthHabitat.push(animal)
                break
            default:
                this.unassignedAnimals.push(animal)
        }

    console.log(`Animal of color ${animal.color} is put nto the ${dir} habitat.`)        
    }
}

let np = new NationalPark('Yellow Stone')

let CareGiverInfoOne = new CareGiverInfo('Albert', 70, 33)
let CareGiverInfoTwo = new CareGiverInfo('Hoffman', 60, 355)
np.assignCaregiverToPark(CareGiverInfoOne)
np.assignCaregiverToPark(CareGiverInfoTwo)



let dog     = new Dog(10, 'brown', 20, 'Bloodhound')
let cat     = new Cat(5, 'white', 10, "Siam", true)
let hippo   = new Hippo(40, 'gray', 15, true)
np.putAnimalToHabitat(new Direction('north'), dog)
np.putAnimalToHabitat(new Direction('north'), cat)
np.putAnimalToHabitat(new Direction('south'), hippo)

let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')

const CENTER_POINT = {
    x: canvas.width / 2,
    Y: canvas.height / 2
}


class Circle {

    constructor(middleX, middleY, radius) {
        this.middleX = middleX
        this.middleY = middleY
        this.radius = radius
    }

    setColor(color) {
        this.color = color
    }

    draw() {
        ctx.beginPath()
        if (this.color) {
            ctx.fillStyle = 'affoooo'
        }

        ctx.arc(this.middleX, this.middleY, this.radius, 0, 2 * Math.PI, false)
        // ctx.fill()
        ctx.stroke()
    }
}

for (let i = 0; i < 100; i++) {
    let randomX = Math.floor(Math.random() * canvas.width)
    let randomY = Math.floor(Math.random() * canvas.height)
    let randomRadius = Math.floor(Math.random() * 100)
    let circle = new Circle(randomX, randomY, randomRadius)
    circle.draw()
}






// class Violin extends MusicInstrument {
//     constructor(size, color, type) {
//         super(size, color)
//         this.type = type
//     }
// }

// class Piano extends MusicInstrument {
//     constructor(size, color, type) {
//         super(size, color)
//         this.type = type
//     }
// }


class Violin {

    constructor(size, color, type) {
        this.size = size
        this.color = color
        this.type = type
    }
    play(){
        console.log(`${this.type} violin is playing beautiful music`)
    }
}

class MusicInstrument {
    constructor (size, color) {
        this.size = size
        this.color = color
    }
    play() {
        console.log('The instrument plays sounds');
    }
}



class Orchestra {

    constructor(musicians) {
        this.musicians = musicians
    }

    addMusician(musician) {
        this.musicians.push(musician)

    }

    playTogether() {
        for (let musician of this.musicians) {
            musician.perform()
        }
    }
}

class Musician {
    constructor(instrument, name) {
        this.instrument = instrument
        this.name = name
    }

    perform() {
        this.instrument.play()
        console.log(`${this.name} has perfomed.`)
    }
}

class MusicalEnterprise {

    constructor (orchestras) {
        this.orchestras = orchestras
        this.salaries = new Map()

        this.wage = 1000

    }

    makePerform(nameOfOrchestra) {
        let orchestra = this.orchestra.get(nameOfOrchestra)
        orchestra.playTogether()

        let salary = this.salaries.get(orchestra.name)
        if (salary) {
            this.salaries.set(orchestra.name, salary + this.wage)
        } else {
            this.salaries.set(orchestra.name, this.wage)
        }

        console.log(`Wage of ${this.wage} was paid to orchestra ${orchestra.name}`) 
        console.log(`Total salary for orchestra ${orchestra.name} is ${this.salaries.get(orchestra.name)}`) 
    }
    
}





let firstViolin  = new Violin('small', 'white', 'electronic')
let firstPiano = new Piano('', '', '')

let musicianOne    = new Musician(firstPiano, 'Jack')
let secondMusician = new Musician(firstViolin, 'Greta')

let musicians = ([musicianOne, secondMusician])
let Orchestra = new Orchestra( "White Eagle Sounds", musicians)
orchestra.addMusician(new Musician(new Violin('medium', 'green', 'electronic'), 'Paul'))

let MusicalEnterprise = new MusicalEnterprise([orchestra]) 
MusicalEnterprise.perform('White Eagle Sounds')


let orchestras = new Map()
orchestras.set(orchestra.name, orchestra)
let MusicalEnterprise = new MusicalEnterprise([orchestra]) 
MusicalEnterprise.perform('White Eagle Sounds')

myMap.set('john.wick@gmail.com', 'John Wick')
myMap.set('ulfrica.zerender@yandex.com', 'Ulrica Zerender')

let johnWick = myMap.get['john.wick@gmail.com']
console.log(johnWick)



// musicianOne.perform()


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

let newMap = new Map()
newMap.set(123, new Person('Geralt', "Riayan", 40))

let person = newMap.get(123)
console.log(person)



