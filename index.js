const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//totalBatteries sum of all battery amounts in batteryBatches array

const totalBatteries = batteryBatches.reduce(function (accumulator, battery) {
  return battery + accumulator;
}, 0);
