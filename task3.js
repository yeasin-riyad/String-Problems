// Check whether a string contains all the vowels a, e, i, o, u

let String="a quick brown ".toLocaleLowerCase();
let vowelsContain=false;

if(String.includes('a') && String.includes('e') && String.includes('i') && String.includes('o') && String.includes('u')){
    console.log("Vowel Contains")

}else{
    console.log('Vowel not contains')
}
