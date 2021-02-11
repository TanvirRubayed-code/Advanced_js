const numvers = [2,3,4,5,6,7,8] ;


// const output = [];
// for (let i=0;i<numvers.length; i++){
//     const result = numvers[i]*numvers[i];
//     console.log(result);
//     output.push(result);
// }



// const result = numvers.map(function (element) {
//     return element*element;
// });

// const result = numvers.map(num => num * num);

const result = numvers.filter(x => x > 5);
console.log(result);
