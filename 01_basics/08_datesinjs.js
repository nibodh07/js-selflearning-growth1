let myDate = new Date()

//console.log(myDate.toString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toDateString());
//console.log(typeof Date);

//let mycreateddate = new Date(2023, 0, 23)
//let mycreateddate = new Date(2023, 0 , 23 , 5, 6)
//let mycreateddate = new Date("2023-01-14")
let mycreateddate = new Date("01-04-2023")
//console.log(mycreateddate.toDateString(3));

let mytimestamp = Date.now()
//console.log(mytimestamp);
//console.log(mycreateddate.getTime());
//console.log(Math.floor(Date.now()/1000))

let newDate =   new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+5);

//`${newDate.getDay}` and the time

newDate.toLocaleString('default',{
    weekday :"long"
})
console.log(newDate.toLocaleString());















