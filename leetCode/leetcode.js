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
