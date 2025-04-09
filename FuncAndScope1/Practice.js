function getName(name){
    return name;
}
let name1 = getName("Katy"); //katy is the value of getName("Katy"); function call


function printName(name){
    console.log("function printName prints:" + name);
}
let name2 = printName("Katy");// undefined is the value of printName("Katy"); function call


console.log("Value of getName(Katy)" + name1); //katy -- return stores a value to memory
console.log("Value of printName(Katy)" + name2); //undefined -- console.log displays
                                                //  a value to user but does not store anything

