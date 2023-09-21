/* 
* objects
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
* 1. Objects are variables that hold multiple values
* 2. Objects can hold multiple data types
* 3. Objects can be declared using {} or new Object()
* 4. Objects are key value pairs
* 5. Objects are mutable
* 6. Objects can be nested
* 7. Objects have methods
*/

// the asparagus object is based on data from wiki
const asparagus = {
  name: "asparagus",
  type: "vegetables",
  top_producers: ["China", "Peru", "Mexico", "Germany", "Thailand"],
  top_importers: ["USA", "Germany", "UK", "France", "Netherlands"],
  botanical_name: "Asparagus officinalis",
  family: "Asparagaceae",
  nutrition: {
    calories: 20,
    fat: 0.1,
    carbs: 3.88,
    protein: 2.2
  },
  minerals: {
    calcium: 24,
    magnesium: 14,
    phosphorus: 52,
    potassium: 202,
  },
  vitamins: {
    vitamin_a: 38,
    vitamin_c: 5.6,
    vitamin_e: 1.13,
    vitamin_k: 41.6
  },
  health_benefits: [
    "Good source of fiber",
    "Rich in antioxidants",
    "May help with weight loss",
    "May help with digestion",
    "May help with blood sugar control",
    "May help with blood pressure"
  ]
};

/*
* Object.keys method
*/
// console.log(Object.keys(asparagus));

/*
* Object.values method
*/
// console.log(Object.values(asparagus));

/*
* Object.entries method
*/
// console.log(Object.entries(asparagus));

/*
* Object.typeof method
*/
// console.log(typeof asparagus);

/*
* Object.isArray method
*/
// console.log(Array.isArray(asparagus));

/* 
* Object.toString method
*/
// console.log(asparagus.toString());

function asString (item) {
  return `${item.name} is of type ${item.type}`;
}

// console.log(inventory.asString());
// console.log(asString(asparagus));

/* 
* pulling out values from an object
*/
const { name, botanical_name, top_producers } = asparagus;
console.log(name, botanical_name, top_producers);

let theName = asparagus.name;

// // let us move on to day_1.5_object_arrays.js