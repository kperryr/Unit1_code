function start() { 
    console.log("Start of program"); //First
    console.log("Back in start");//Fifth
}

function firstTask() {
 console.log("First task running"); //Second
 secondTask();
 console.log("Back in first task");//Fourth
}

function secondTask() {
 console.log("Second task in progress");// Third
}

console.log(start());// 1
console.log("Exiting out of start - end of program");//Sixth
