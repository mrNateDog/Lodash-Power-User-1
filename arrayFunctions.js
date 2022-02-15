const defaultList = [
  "cymbal",
  "drum",
  "speaker",
  "television",
  "monitor",
  "monitor",
  "keyboard",
  "mouse",
  "trackball",
];
const defaultList2 = [
  "cymbal",
  "drum",
  "speaker",
  "television",
  "monitor",
  "monitor",
  "keyboard",
  "mouse",
  "trackball",
];

//_.concat -  new array concatenating array with any additional arrays and/or values
console.log(_.concat(defaultList, "glasses", "drums"));
//adds glassses and drums to the array

//difference - array of array values not included in the other given arrays
console.log(_.difference([1, 2, 3, 4, 5, 6], [2, 4, 6]));
//will return 1,3,5

//Fill- Fills elements of array with value from start up to, but not including, end.
console.log(_.fill(defaultList, "stuff"));
//fills the entire array with "stuff"

//flatten - Flattens array a single level deep.
console.log(_.flatten([1, [2, [3, [4]], 5]]));

//indexof - Gets the index at which the first occurrence of value is found in array
console.log(_.indexOf([1, 2, 1, 2], 2));
//returns 1 - since the first appearance of 2 is at the first position

//join - Converts all elements in array into a STRING separated by separator.
console.log(_.join(defaultList, ", "));

//first - now _.head - getst the first element of the array
console.log(_.head(defaultList2));
//returns "cymbal"

//last - returns the last element of an array
console.log(_.last(defaultList2));
//returns "trackball"

//nth- returns the specified index of an array.
console.log(_.nth(defaultList2, 3));
//returns "television"

//remove - Removes all elements from array that predicate returns truthy for and returns an array of the removed elements.
var removeArray = [1, 2, 3, 4, 5, 6];
console.log(
  _.remove(removeArray, function (n) {
    return n % 3;
  })
);
//returns 3 & 6, numbers divisible by '3'

//reverse - Reverses array so that the first element becomes the last, the second element becomes the second to last,
console.log(_.reverse(defaultList2));
//cymbal is now last, trackball is first

//slice = Creates a slice of array from start up to, but not including, end.
console.log(_.slice(defaultList2, 1, 3));
//returns "mouse" and "keyboard" - this fooled me since the array was reversed!

//take - Creates a slice of array with n elements taken from the beginning.
console.log(_.take(defaultList2, 3));
//returns trackball, mouse, keyboard

//uniq - Creates a duplicate-free version of an array
console.log(_.uniq(defaultList2));
//returns 8 results-- there are two elements called monitor
