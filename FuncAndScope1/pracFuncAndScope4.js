function reverseString(str){
    if(str.length <= 1 ){
        return str;
    }
    let char = str.slice(-1);
    let str3 = str.slice(0, (str.length -1));  

    str2 = char + reverseString(str3);
    return str2;

} 


console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); 