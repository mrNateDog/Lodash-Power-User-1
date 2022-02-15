//camelcase- remove spaces, punctuations -- second & sub words are capialized
console.log(_.camelCase("Nathan & Candace"));
//returns nathanCandace

//capitalize - first character is upper case, then remaining lowercase
console.log(_.capitalize("NATHAN"));
//Nathan

//kebabCase - converts a string to kebab case- spaces are replaced w. dashes
console.log(_.kebabCase("hello world I'm Nathan"));
//returns hello-world-im-nathan

//lowerCase- Converts string, as space separated words, to lower case.
console.log(_.lowerCase("Hi_there-how ARE things?"));
//returns hi there how are things

//upperCase - Converts string, as space separated words, to upper case.
console.log(_.upperCase("Hi_there-how ARE things?"));
//returns HI THERE HOW ARE THINGS

//lowerFirst -Converts the first character of string to lower case.
console.log(_.lowerFirst("Nathan McClure"));
//returns nathan McClure

//upperFirst - Converts the first character of string to upper case.
console.log(_.upperFirst("nathan mcclure"));
//Nathan mcclure

//snakeCase- each space is replaced by an underscore, the first word is in lowercase
console.log(_.snakeCase("Hi_there-how ARE things?"));
//returns hi_there_how_are_things

//startsWith - checks w. a string starts with a given target string
console.log(_.startsWith("nathanMcClure", "nathan"));
console.log(_.startsWith("nathanMcClure", "laylal"));
//returns true, then false

//trim- Removes leading and trailing whitespace or specified characters from string. not in the middle and it can't remove spaces & characters
console.log(_.trim("_hello world how are you ", "_-"));
//returns hello world how are you

//trimEnd & trimStart - removes trailing whitespace & char, or leading " "
console.log(_.trimEnd("_Hi There "));
//returns _Hi There
console.log(_.trimStart("_Hi There ", "_"));
//returns Hi There

//pad- Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
console.log(_.pad("hello", 3));
console.log(_.pad("Nathan", 10, "_-"));
//returns hello and _-Nathan_-

//padEnd & padStart - Pads string on the right side, and left side
console.log(_.padEnd("padEnd", 8)); //pads two spaces on the right
console.log(_.padStart("padStart", 10)); //would pad 2 spaces left - length of string - padding string

//escape- Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities. ONLY those characters
console.log(_.escape("Nathan, Candace, & lpants"));
//returns Nathan, Candace, &amp; lpants

//unescape- inverse of escape - converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their corresponding characters.
console.log(_.unescape("Nathan, Candace, &amp; lpants"));
//returns Nathan, Candace, & lpants

//words- Splits string into an array of its words.
console.log(_.words("steak, chicken & pork"));
//returns ['steak', 'chicken', 'pork']

//truncate- Truncates string if it's longer than the given maximum string length. "..." indicates truncation
console.log(_.truncate("Hi there, my name is Nathan McClure", { length: 15 })); //truncates at 10 characters
console.log(
  _.truncate("Hi there, my name is Nathan McClure", {
    length: 15,
    separator: /,/,
  })
); //stops at the comma
