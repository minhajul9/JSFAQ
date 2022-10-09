const start = new Date();
let sum = 0;
for(let i = 0;i<10000000;i++){
    sum++;
}
const end = new Date();
console.log('Time elapsed', end - start, sum);
console.log('Start', start);
console.log('End', end);