// Code your solution here
// js

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// holds the sum of all of the battery amounts in the batteryBatches array. 
let totalBatteries = batteryBatches.reduce((accum, batch) => accum + batch, 0);

console.log(totalBatteries);