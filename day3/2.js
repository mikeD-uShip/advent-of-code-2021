'use strict';

// --- Part Two ---

// const {  } = require('lodash');
const { count } = require('../lib');


module.exports = (inputs, rawInput) => {
  const inputArr = rawInput.split('\n');
  const oTwoRating = parseInt(findOTwo(inputArr, 0), 2);
  const ceeOTwoRating = parseInt(findCeeOTwo(inputArr, 0), 2);
  return oTwoRating * ceeOTwoRating;
};

const findOTwo = (arr, index) => {
  console.log(arr);
  if(arr.length === 1){
    console.log(arr.length)
    console.log(arr[0]);
    return arr[0];
  }
    let zeroCount = count(arr, (el) => el[index] === '0');
    let oneCount = count(arr, (el) => el[index] === '1');
  if(zeroCount > oneCount) {
    arr = arr.filter(el => el[index] === '0')
    return findOTwo(arr, index + 1 );
 
  }else{
    arr = arr.filter(el => el[index] === '1')
    return findOTwo(arr, index + 1 );
  }
  
}

const findCeeOTwo = (arr, index) => {
  if(arr.length === 1){
    return arr[0];
  }
    let zeroCount = count(arr, (el) => el[index] === '0');
    let oneCount = count(arr, (el) => el[index] === '1');
  if(zeroCount <= oneCount) {
    arr = arr.filter(el => el[index] === '0')
    return findCeeOTwo(arr, index + 1 );
  }else{
    arr = arr.filter(el => el[index] === '1')
    return findCeeOTwo(arr, index + 1 );
  }
}