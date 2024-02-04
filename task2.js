// Count how many times a string has the letter a or A

let String="Hi I Am Yeasin Riyad.I Am Ok... aA";
let count=0;
for(let a of String){
    if(a==="a"|| a==="A"){
        count+=1;
    }
}

console.log(count);