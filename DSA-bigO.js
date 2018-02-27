'use strict';


/***** Big O drills *****/


// Even or odd
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

/* Big O Complexity: 
-This algorithm has a constant time complexity 0(1).
- No matter how large the input gets, it will always output the constant
value of either true or false.  It will either run one or two operations but that number remains constant.  So the max amount of operations it will
run through is two no matter what the input is. (if the if statement doesn't return, then returns false in the else statement).
*/

//Are you here?
Are you here?
function areYouHere(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

/* Big O Complexity: 
-This algorithm has a Polynomial time complexity 0(n^2).
-This algorithm requires two levels of looping over an input, so it is also n^2 specifically.  Because the top level loop iterates through in a linear sense, then has another nested loop within, that makes it n^2.
*/

//Doubler
Doubler
function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/* Big O Complexity: 
-This algorithm has a Linear time complexity 0(n).
-This algorithm will always loop through the entire array so it scales proportionally to the input provided.  
*/

//Naive Search   
Naive Search
function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

/* Big O Complexity: 
-This algorithm also has a Linear time complexity 0(n).
-Even though the algorithm will potentially return sooner than the previous algorithm, it still scales in a linear sense with the provided inputs, and the worst case is still iterating through the entire array in the for loop.
*/

//Creating pairs
Creating pairs:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
/* Big O Complexity: 
-This algorithm has a Polynomial time complexity 0(n^2).
-The algorithm is polynomial because of the nested for loops and how the worst case scenario is reaching the end of both arrays creating pairs for each index. It's not exponential because it does not build upon those loops.
*/


//Computing fibonaccis
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

/* Big O Complexity: 
-This algorithm has a Linear time complexity 0(n).
-The algorithm is linear because the for loop is given only one input which is checked twice
*/


//An Efficient Search
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

/* Big O Complexity: 
-This algorithm has a Logarithmic time complexity 0(log(n)).
-The algorithm is Logarithmic because the problem continues to cut itself into smaller pieces.
*/

//Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* Big O Complexity: 
-This algorithm has a constant time complexity 0(1).
-The algorithm is constant because the run time will always be 1 no matter the length of the array
*/


//Is it prime?
function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
      return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

/* Big O Complexity: 
-This algorithm has a Linear time complexity 0(n).
-The algorithm is linear because the input is checked once before a loop then once inside the loop it runs one more check.
*/


//***** Big O for Recursive Drills *****//

//Exercise 1 - countSheep 
function countSheep(num){
  //stopping condition of base case
  if(num === 0){
      console.log(`All sheep jumped over the fence`);
  } 
  //this is the recursive case
  //this will be executed until it reaches base case
  else{
      console.log(`${num}: Another sheep jump over the fence`);
      countSheep(num-1);
  }
}

/* Big O Complexity: 
-This algorithm has a Linear time complexity 0(n).
-Scales the number of operations such as the console.log and countSHeep(num-1) with how big the num input is on the operations
*/


//Exercise 2 - Array Double 
function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}

/* Big O Complexity: 
-This algorithm has a Linear time complexity 0(n).
-Linearaly scales the number of recursive function calls based off of the size of the input, increasing the function stack to be returned during the backward phase.
*/



//Exercise 3 - Reverse String
function reverseString(str) {
  if (str.length < 2) {
      return str;
  }
  return reverseString(str.slice(1)) + str[0];
}
/* Big O Complexity: 
-This algorithm has a Linear time complexity 0(n).
-Linearaly scales the number of recursive function calls based off of the size of the input, increasing the function stack to be returned during the backward phase.  For example, the number of times you slice through the string is linearaly dependent on how large the string input is.
*/

//Exercise 4 - Triangular Number
function triangle(n) {
  if (n < 2) 
      return n;
  return n + triangle(n - 1);
}
/* Big O Complexity: 
-This algorithm has a Linear time complexity 0(n).
-Scales with the input size for (n) in a linear fashion, so the amount of times traingle(n -1) is invoked recursively is dependent on that input size in a direct, linear correlation.
*/

//Exercise 5 - String Splitter

Split a string based upon a separator (similar to String.prototype.split).
Input: '1/21/2018'
Output: 1212018 OR ["1", "21", "2018"]
*/
function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
		//you don't have to return an array, you can return a string as an array of 
		//character 
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
	//all these are valid syntax
	//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
	//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}
/* Big O Complexity: 
-This algorithm has a Linear time complexity 0(n).
-Scales linearily with the string input size, because the recursive function call will continue to split the string relative to the input size as well.  
*/


//Exercise 6 - Binary Representation
Input: 25
Output: 11001
*/
function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the reminder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; //base case - at some point the divisions will lead to 0
    }
}
/* Big O Complexity: 
-This algorithm has a Logarithmic time complexity 0(log(n)).
-The algorithm is Logarithmic because it's constantly breaking itself down to more manageable inputs
*/


//Exercise 7 - Anagrams

function anagrams(prefix, str){
  if(str.length <= 1){
      console.log(`The anagram is ${prefix}${str}`);
  } else {
      for(let i=0; i<str.length; i++){
          let currentLetter = str.substring(i, i+1); 
          let previousLetters = str.substring(0,i);
          let afterLetters = str.substring(i+1);
          anagrams(prefix+currentLetter, previousLetters+afterLetters);
      }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);
}
/* Big O Complexity: 
-This algorithm has a Polynomial time complexity 0(n^2).
-The algorithm is polynomial because for every time the loop inside the function runs, it calls the function again and raises the input to the 2nd power.
*/


// Exercise 8: Animal Hierarchy

const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}

/* Big O Complexity: 
-This algorithm has a Exponential time complexity 0(2^n).
-The algorithm is Exponential because for every index of the array the function calls itself once more due to the foreach and raises the input exponentially
*/

// Exercise 9 - Factorial

function factorial(n) {  
    // Base Case - when n is equal to 0, we stop the recursion
    if (n === 0) {
      return 1;
    }
    // This is our Recursive Case
    // It will run for all other conditions except when n is equal to 0
    return n * factorial(n - 1);
  }

  /* Big O Complexity: 
-This algorithm has a linear time complexity 0(n).
-The algorithm is linear because it's directly proportional to the size of the input.
*/

// Exercise 10 - Fibonacci

function fibonacci(n) {
    // Base case
    if (n <= 0) {
      return 0;
    }
    // Base case
    if (n <= 2) {
      return 1;
    }	
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);	
  }

 /* Big O Complexity: 
-This algorithm has a polynomial time complexity 0(n^2).
-The algorithm is polynomial because the function is calling itself twice which raises the input to the power of 2
*/

// Organization Chart

let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}

/* Big O Complexity: 
-This algorithm has a Exponential time complexity 0(2^n)
-The algorithm is Exponential because for every index of the array/key in object the function calls itself once more due to the foreach and raises the input exponentially
*/












