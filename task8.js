// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let string="";
for(let word of numbers){
    string+=word;
    // string.concat(word)
}

console.log(string)