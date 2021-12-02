'use strict';

// --- Part Two ---

// const {  } = require('lodash');
// const {  } = require('../lib');


module.exports = (inputs) => {
  let x = 0;
  let y = 0;
  let aim = 0;
 inputs.forEach(input => {
   let movement = input.split(' ');
   console.log(movement);
   if(movement[0] === 'forward') {
     x += parseInt(movement[1]);
     let xAim =  parseInt(movement[1]) * aim;
     y += xAim;
     console.log(xAim);
   } else if(movement[0] === 'up'){
      //  y = y - parseInt(movement[1]);
       aim = aim - parseInt(movement[1]);
       (console.log('up'))
      } else {
        // y += parseInt(movement[1]);
        aim += parseInt(movement[1]);
        console.log('down');
     }

   }
 )
  return x * y;
};
