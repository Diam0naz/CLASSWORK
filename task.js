/*
1. Given two user profile objects (e.g., personalInfo and contactInfo), merge them into a single userProfile object.
2. Given a product object, log all its keys and values. Bonus: Format them as "key: value" pairs in an array or print them line by line.
3. Create a settings object (e.g., theme: "dark", notifications: true). Freeze it and try changing a value. Use Object.isFrozen to confirm if it's immutable.
*/


// Task One
let personalInfo = {
    firsrName: "Matthew",
    surName: "Kuru",
    age: 22
}

let contactInfo = {
    location: "Plateau State",
    residence: "Ray-field",
    phone: "+234 8367221372" 
}

const userProfile = Object.assign(personalInfo, contactInfo)

//console.log(userProfile)

// Task Two
const shopProduct = {
    kitchenUtendils: ["Spoon", "Plates", "Cups"],
    foodStuffs: ["Yam", "Garri", "Onions", "Rice" ],
    grocries: [ "Matches", "Candles", "Milo", "Bournvita" ]
}

//logging both keys and values 
//console.log(shopProduct)

//logging only the keys
const keys = Object.keys(shopProduct)
//console.log(keys)


//logging only the values
const values = Object.values(shopProduct)
//console.log(values)

//checking if Garri is in a key

// Printing each product on a line
keys.forEach((key, i) => {
    console.log(`${keys[i]}: ${values[i]}`)
}
)


// Task Three
const settings = {
    theme: "dark",
    notification: true
}

Object.freeze(settings)
settings.theme = "light"

// if (Object.isFrozen(settings) == true) {
//     console.log("Immutable settings!")
// } else {
//     console.log("Mutable")
// }

//console.log(settings)

