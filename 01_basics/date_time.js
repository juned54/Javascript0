// let mydate=new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.getDate());
// console.log(mydate.toLocaleTimeString());
// // console.log(mydate.getDate());
let createdate=new Date("07-07-2023");
console.log(createdate.toLocaleDateString());
let myTimestamp= Date .now();
console.log(myTimestamp);
console.log(createdate.getDate());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));
let newdate=new Date();
console.log(newdate.getDate());
console.log(newdate.getMonth());
console.log(newdate.getDay());


newdate.toLocaleString('default',{
    weekday:"long",
})


