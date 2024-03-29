// 412. Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
var fizzBuzz = function (n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i.toString());
    }
  }
  return array;
};

// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
var isPalindrome = function (x) {
  return x == x.toString().split("").reverse().join("");
};

//20. Valid Parentheses
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//An input string is valid if:
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && top === "(" && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === "]" && top === "[" && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === "}" && top === "{" && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

//94. Binary Tree Inorder Traversal
//Given the root of a binary tree, return the inorder traversal of its nodes' values.
var inorderTraversal = function (root) {
  var res = [];
  helper(root, res);
  return res;
};

var helper = function (root, res) {
  if (!root) return;
  if (root.left) helper(root.left, res);
  res.push(root.val);
  if (root.right) helper(root.right, res);
};

// 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

// 278. First Bad Version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) right = mid;
      else left = mid + 1;
    }

    return left;
  };
};

// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// 290. Word Pattern
//Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  const charToWord = new Map();
  const wordToChar = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
    if (!charToWord.has(char) && !wordToChar.has(word)) {
      charToWord.set(char, word);
      wordToChar.set(word, char);
    } else if (charToWord.get(char) !== word || wordToChar.get(word) !== char) {
      return false;
    }
  }
  return true;
};

//1497. Check If Array Pairs Are Divisible by k
//Given an array of integers arr of even length n and an integer k.
//We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.
//Return true If you can find a way to do that or false otherwise.
var canArrange = function (arr, k) {
  const remainders = new Map();
  for (const num of arr) {
    const remainder = num % k;
    remainders.set(remainder, (remainders.get(remainder) || 0) + 1);
  }
  for (const num of arr) {
    const remainder = num % k;
    if (remainders.get(remainder) > 0) {
      const complement = (k - remainder) % k;
      if (remainders.get(complement) > 0) {
        remainders.set(remainder, remainders.get(remainder) - 1);
        remainders.set(complement, remainders.get(complement) - 1);
      } else {
        return false;
      }
    }
  }
  return true;
};

//13. Roman to Integer
//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
//Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//Given a roman numeral, convert it to an integer.

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = map[s[s.length - 1]];
  for (let i = s.length - 2; i >= 0; i--) {
    if (map[s[i]] < map[s[i + 1]]) {
      sum -= map[s[i]];
    } else {
      sum += map[s[i]];
    }
  }
  return sum;
};

//27. Remove Element
//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
//Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
//Return k after placing the final result in the first k slots of nums.
var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

//69. Sqrt(x)
//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
//You must not use any built-in exponent function or operator.
function mySqrt(x) {
  if (x === 0) return 0;

  let i = 1;
  while (i * i <= x) {
    i++;
  }

  return i - 1;
}

//88. Merge Sorted Array
//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

//118. Pascal's Triangle
//Given an integer numRows, return the first numRows of Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
var generate = function (numRows) {
  if (numRows <= 0) return [];
  let triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};

//169. Majority Element
//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
var majorityElement = function (nums) {
  let counts = new Map();
  let majority = Math.floor(nums.length / 2);
  for (let num of nums) {
    if (!counts.has(num)) {
      counts.set(num, 1);
    } else {
      counts.set(num, counts.get(num) + 1);
    }
    if (counts.get(num) > majority) {
      return num;
    }
  }
};

//183. Customers Who Never Order
//SQL Schema
//Write an SQL query to report all customers who never order anything.
//Return the result table in any order.

//SELECT name as Customers
//FROM Customers
//WHERE id NOT IN (SELECT DISTINCT customerId FROM Orders);

//136. Single Number
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

//175. Combine Two Tables
//Write an SQL query to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.
//Return the result table in any order.

//SELECT Person.firstName, Person.lastName, Address.city, Address.state
//FROM Person
//LEFT JOIN Address ON Person.personId = Address.personId;

//193. Valid Phone Numbers
//Given a text file file.txt that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.
//You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)
//You may also assume each line in the text file must not contain leading or trailing white spaces.
//Your script should output the following valid phone numbers:
//987-123-4567
//(123) 456-7890

// grep -E '^(\([0-9]{3}\) [0-9]{3}\-[0-9]{4}|[0-9]{3}\-[0-9]{3}\-[0-9]{4})$' file.txt

//195. Tenth Line
//Given a text file file.txt, print just the 10th line of the file.

// sed -n '10p' file.txt | head -1

//374. Guess Number Higher or Lower
//We are playing the Guess Game. The game is as follows:
//I pick a number from 1 to n. You have to guess which number I picked.
//Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
//You call a pre-defined API int guess(int num), which returns three possible results:
//-1: Your guess is higher than the number I picked (i.e. num > pick).
//1: Your guess is lower than the number I picked (i.e. num < pick).
//0: your guess is equal to the number I picked (i.e. num == pick).
//Return the number that I picked.
var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const res = guess(mid);

    if (res === 0) {
      return mid;
    } else if (res === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

//509. Fibonacci Number
//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n - 2), for n > 1.
//Given n, calculate F(n).

var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

//595. Big Countries
//A country is big if:
//it has an area of at least three million (i.e., 3000000 km2), or
//it has a population of at least twenty-five million (i.e., 25000000).
//Write an SQL query to report the name, population, and area of the big countries.
//Return the result table in any order.

//SELECT name, population, area
//FROM World
//WHERE area >= 3000000 OR population >= 25000000;

// 596. Classes More Than 5 Students
//Each row of this table indicates the name of a student and the class in which they are enrolled.
//Write an SQL query to report all the classes that have at least five students.
//Return the result table in any order.

//SELECT class
//FROM Courses
//GROUP BY class
//HAVING COUNT(DISTINCT student) >= 5;

//58. Length of Last Word
//Given a string s consisting of words and spaces, return the length of the last word in the string.
//A word is a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s) {
  s = s.trim();
  let lastSpaceIndex = s.lastIndexOf(" ");
  // If there are no spaces, the entire string is a word
  if (lastSpaceIndex === -1) {
    return s.length;
  }
  // Otherwise, return the length of the last word
  return s.length - lastSpaceIndex - 1;
}
