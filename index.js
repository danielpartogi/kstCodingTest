var fs = require('fs'); // make file system used as fs variable.

var pathFile = './input/unsorted-names-list.txt'; // u can change the txt file in here
var array = fs.readFileSync(pathFile).toString().split('\n'); // it is used to read the file and make them to the array, spliting by line
var newArray = []; //reserved array
var result = []; // reserved array for output


// because it's takes the last word as name which sorted, we use the reverse method to sort the name.
array.forEach(element => {
    newArray.push(element.split(' ').reverse());
});

//sort the new array
newArray = newArray.sort();

// we foreach again and reverse then join to makes the output became as we wanted.
newArray.forEach(element => {
   result.push(element.reverse().join(" "));
});

// write the output as the name we want.
fs.writeFileSync('./output/sorted-names-list.txt',result.join("\n"));

console.log('Your sorted file is in output folder and below \n');

// show every element in result
result.forEach(element => {
   console.log(element)
});