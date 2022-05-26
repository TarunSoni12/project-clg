
const funcAdd = function add(a, b){
    return a+b;
}

console.log(typeof funcAdd());
console.log(funcAdd(2,3));




const funcAddUsingArrow = (a, b) =>
{
    console.log("Adding...");
    return a+b;
}

console.log(typeof funcAddUsingArrow);
console.log(funcAddUsingArrow(2, 3));
