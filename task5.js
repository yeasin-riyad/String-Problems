// Capitalize Every first Letter of each word in a String

let String='a quick brown fox jumps over a lazy dog.'
let array=String.split(" ")
// let array1=[];
// for (let x of array){
//     x=x[0].toUpperCase()+x.substr(1)
//     array1.push(x)
    
// }


// console.log(array1.join(" "))

for(let i in array){
    array[i]=array[i][0].toUpperCase()+array[i].substr(1)

}
console.log(array.join(' '))