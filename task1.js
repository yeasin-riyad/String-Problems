// Count how many times a string has the letter a


let String="I am Yeasin Riyad. I am a Student Of University Yah...".toLocaleLowerCase();
let aContain=0;

for(let a of String){
    if(a==="a"){
        aContain+=1;
    }
}

console.log("the letter a has ",aContain,"times");