'use strict';

// --- Day day3 ---

// const {  } = require('lodash');
// const {  } = require('../lib');


module.exports = (inputs, rawInput) => {
  const binArr = rawInput.split('\n');
  let countArr = [
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],
    [0,0],];
    let gamma = [];
    let epsilon = [];

  binArr.forEach(el => {
    for(let i = 0; i < el.length; i++){
      if (parseInt(el[i]) === 0){     
        countArr[i][0] = countArr[i][0] + 1;
      }else{
        countArr[i][1] = countArr[i][1] + 1;
      }
    }
  })
  countArr.forEach(element => {
    if(element[0] > element[1]){
      gamma.push(0) 
      epsilon.push(1)
    }else{
      gamma.push(1)
      epsilon.push(0);
    }
  })
  const gammaInt = parseInt(gamma.join(''), 2);
  const epsilonInt = parseInt(epsilon.join(''), 2);

  return gammaInt * epsilonInt;
};
