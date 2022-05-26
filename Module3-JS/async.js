

function task1() {
    setTimeout(() => {console.log("task1");},  2000);
}


function task2() {
    setTimeout(() => {console.log("task2");},  4000);
}


function task3() {
    setTimeout(() => {console.log("task3");},  2000);
}

task1();
task2();
task3();