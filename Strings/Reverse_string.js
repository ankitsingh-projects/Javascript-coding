//Using for-loop

let str = "hello";
let reversed = "";

for(let i=str.length-1; i>=0; i--){
    reversed += str[i];
}
console.log(reversed);

// without using for-loop

let string = "github";
let reverse = string.split("").reverse().join("");
console.log(reverse);

//Using function
function reverseString(str){
    if(str ===""){
        return ""
    }
return reverseString(str.substr(1)) +str[0];
}
console.log(reverseString("QAankitSingh"));