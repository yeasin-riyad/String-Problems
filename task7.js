// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
let array=statement.split(" ");
// console.log(array.reverse())
let newArray=[];
for(let value of array){
    newArray.unshift(value)
    
}
console.log(newArray);