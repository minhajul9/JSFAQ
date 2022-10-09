function doSomething(){
    console.log(3333);
}

console.log(2222);
// setTimeout(()=> {
//     console.log('See You Later.');
// }, 1000);//1000milisecond

setInterval(function(){
    console.log('Doing it');
}, 3000); //to stop ctrl + c

console.log(4444);
console.log(5555);