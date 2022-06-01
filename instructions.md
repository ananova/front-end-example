# Coding Tasks

## Activity 1

#### What we'll be looking at is how you approach the following:
- use of Git
- knowledge of JavaScript API
- component composition knowledge
- CSS knowledge

#### Limitations
- For this activity you can use either React, Vue or Angular
- Do not use any CSS precompilers; plain CSS only
- Do not use any UI component libraries
- Use the default framework CLI builder (e.g. Create React App, Vue CLI, or Angular CLI)
- Do not use any reactive stores (e.g. Redux, Vuex or NGRX)
- Do not add any other dependencies (e.g Lodash)
  
#### What we'd like you to do:
1. Take the following data and format it into a table
2. Add toggles to sort by id, type and batter (both ascending and descending)
3. Add a text input to filter the data
4. Add a form to collect new baked goods
5. Make the elements look nice using CSS

Once you have completed the task, please push the repository into a public Git host (Bitbucket/Github/Gitlab) with a README.md with instructions on how to build and run the application locally.

```
[
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Regular Glazed"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Regular Sugar"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Regular Powdered Sugar"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Regular Chocolate with Sprinkles"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Regular Chocolate"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Regular Maple"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Chocolate None"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Chocolate Glazed"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Chocolate Sugar"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Chocolate Powdered Sugar"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Chocolate Chocolate with Sprinkles"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Chocolate Chocolate"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Chocolate Maple"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Blueberry None"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Blueberry Glazed"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Blueberry Sugar"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Blueberry Powdered Sugar"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Blueberry Chocolate with Sprinkles"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Blueberry Chocolate"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Blueberry Maple"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Devil's Food None"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Devil's Food Glazed"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Devil's Food Sugar"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Devil's Food Powdered Sugar"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Devil's Food Chocolate with Sprinkles"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Devil's Food Chocolate"
},
{
"id": 0001,
"type": "donut",
"name": "Cake",
"topping": "Devil's Food Maple"
},
{
"id": 0002,
"type": "donut",
"name": "Raised",
"topping": "Regular None"
},
{
"id": 0002,
"type": "donut",
"name": "Raised",
"topping": "Regular Glazed"
},
{
"id": 0002,
"type": "donut",
"name": "Raised",
"topping": "Regular Sugar"
},
{
"id": 0002,
"type": "donut",
"name": "Raised",
"topping": "Regular Chocolate"
},
{
"id": 0002,
"type": "donut",
"name": "Raised",
"topping": "Regular Maple"
},
{
"id": 0003,
"type": "donut",
"name": "Old Fashioned",
"topping": "Regular None"
},
{
"id": 0003,
"type": "donut",
"name": "Old Fashioned",
"topping": "Regular Glazed"
},
{
"id": 0003,
"type": "donut",
"name": "Old Fashioned",
"topping": "Regular Chocolate"
},
{
"id": 0003,
"type": "donut",
"name": "Old Fashioned",
"topping": "Regular Maple"
},
{
"id": 0003,
"type": "donut",
"name": "Old Fashioned",
"topping": "Chocolate None"
},
{
"id": 0003,
"type": "donut",
"name": "Old Fashioned",
"topping": "Chocolate Glazed"
},
{
"id": 0003,
"type": "donut",
"name": "Old Fashioned",
"topping": "Chocolate Chocolate"
},
{
"id": 0003,
"type": "donut",
"name": "Old Fashioned",
"topping": "Chocolate Maple"
},
{
"id": 0004,
"type": "bar",
"name": "Bar",
"topping": "Regular Chocolate"
},
{
"id": 0004,
"type": "bar",
"name": "Bar",
"topping": "Regular Maple"
},
{
"id": 0005,
"type": "twist",
"name": "Twist",
"topping": "Regular Glazed"
},
{
"id": 0005,
"type": "twist",
"name": "Twist",
"topping": "Regular Sugar"
},
{
"id": 0006,
"type": "filled",
"name": "Filled",
"topping": "Regular Glazed"
},
{
"id": 0006,
"type": "filled",
"name": "Filled",
"topping": "Regular Powdered Sugar"
},
{
"id": 0006,
"type": "filled",
"name": "Filled",
"topping": "Regular Chocolate"
},
{
"id": 0006,
"type": "filled",
"name": "Filled",
"topping": "Regular Maple"
},
]
```

## Activity 2
Given a path to a property of an object, write a function that returns the value of the property. The function should accept a parameter of the path and optionally the object you are searching in.

Use the following object and illustrate how you would retrieve values for the following properties: suburb, asxListed

{
name: 'Megaport',
address: {
office: {
unit: 'Level 3',
street: '825 Ann Street',
suburb: 'Fortitude Valley',
city: 'Brisbane',
state: 'Queensland',
postcode: 4006,
},
},
industry: {
type: 'Internet and telecommunications',
asxListed: true,
},
}

For example:

/**
* get the value of the property
* @param {String} path - the object path ie. 'address.office.state'
* @obj {Object} the object
  */
  function getValue(path, obj) {
  ...
  }


Activity 3
Write a reusable fetch function that GETs the list of Megaport enabled locations from the following endpoint: https://api.megaport.com/v2/locations

The function should be asynchronous and return either the result or an error.