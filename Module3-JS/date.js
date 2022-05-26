
var today=new Date();
console.log(today);

// Creating date
var date=new Date(2021, 11, 25, 09, 57, 50, 34);
console.log(date);

// Dislay time
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());

// Get date
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());

const day = ("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
console.log(date.getDay());
console.log(days[date.getDay()]);
console.log(date.getHours());
console.log(date.getMinutes());
