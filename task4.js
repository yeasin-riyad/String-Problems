// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let String="Hi i am X. x is belongs ok x..."

String=String.replace(/x/g,'y');
String=String.replace(/X/g,'Y');
console.log(String)

// for(let i of String){
//     if(i==='x'){
//         i='y'
//     }else if(i==="X"){
//         i="Y"
//     }
// }

// console.log(String)

// let array=String.split('');
// console.log(array)

// for(value in array){

//     if(array[value]==='x'){
//         array[value]='y'
//     }else if(array[value]==="X"){
//         array[value]='Y'
//     }
    

// }

// console.log(array.toString())

// for (char of String){
//     if(char.charCode>=97 || char.charCode<=122){
//         String=String.replace(/x/g,'y')
//     }
//     if(char.charCode>=65 || char.charCode<=90){
//         String=String.replace(/X/g,'Y')
//     }
// }

// console.log(String)