'use strict';

// --- Day day2 ---

// const {  } = require('lodash');
// const {  } = require('../lib');


module.exports = (inputs) => {
  let x = 0;
  let y = 0;
 inputs.forEach(input => {
   let movement = input.split(' ');
   console.log(movement);
   if(movement[0] === 'forward') {
     x += parseInt(movement[1]);
     console.log(' forward')
   } else if(movement[0] === 'up'){
       y = y - parseInt(movement[1]);
       (console.log('up'))
      } else {
        y += parseInt(movement[1]);
        console.log('down');
     }

   }
 )
  return x * y;
};
