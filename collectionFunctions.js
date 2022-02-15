//each/forEach - Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
_.forEach({ a: 1, b: 2 }, function (value, key) {
  console.log(value); //returns 1 & 2
  //console.log(key); //returns a & b
});

//every - if all elements pass the check it returns true, otherwise false. will stop checkign once it encounters false.
//truthy= value is true
var users = [
  { user: "Nathan", age: 36, active: true },
  { user: "Candace", age: 41, active: false },
];
console.log(_.every(users, ["age", 36]));
//will return false bc both ages are not 36. changing Fred's age to 36 will change to true.

//find- goes through elements and returns the FIRST element it finds truth for
var mcclure = [
  { user: "nathan", age: 36, active: true },
  { user: "candace", age: 41, active: false },
  { user: "lpants", age: 3, active: true },
];
console.log(
  _.find(users, function (o) {
    return o.age < 40;
  })
);
//returns  nathan

//flatmap - Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results.
function duplicate(n) {
  return [n, n];
}
console.log(_.flatMap([2, 1, 3], duplicate));
// 2,2,1,1,3,3

//groupBy - groups the strings by grouped values-- in this case length
console.log(_.groupBy(["hi", "hello", "dog", "pi"], "length"));
//groups pi & hi(2), dog (3), and hello (5)

//includes - checks if a value is in a collection
console.log(_.includes([1, 2, 3], 1)); //true
console.log(_.includes(["dude", "lady", "child"], "dog")); //false

//map - Creates an array of values by running each element in collection thru iteratee.
var names = [{ user: "nathan" }, { user: "candace" }, { user: "Steve" }];

console.log(_.map(names, "user"));
//nathan, candace, Steve

//orderby - like sortby-- but can specify by asc or desc... asc by default
var mcclure2 = [
  { user: "nathan", age: 36, active: true },
  { user: "candace", age: 41, active: false },
  { user: "lpants", age: 3, active: true },
];
console.log(_.orderBy(mcclure2, ["user", "age"], ["asc", "desc"])); //candace, lpants, nathan

//sortby - Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee.
console.log(_.sortBy(mcclure2, ["age", "user"])); //sorted by ascending age
console.log(_.sortBy(mcclure2, ["user", "age"])); //sorted by alphabetical order

//reduce - Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value.
console.log(
  _.reduce(
    { a: 1, b: 2, c: 1, d: 1, e: 4 },
    function (result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    },
    {}
  )
);
//1 [a,c,d], 2 [b], 4[3]
