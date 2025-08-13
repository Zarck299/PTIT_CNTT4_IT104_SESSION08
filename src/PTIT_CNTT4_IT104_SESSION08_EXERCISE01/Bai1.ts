enum Weekdays{
    Monday = "Thu Hai",
    Tuesday = "Thu Ba",
    Wednesday = 'Thu Tu',
    Thursday = 'Thu Nam',
    Friday = 'Thu Sau',
    Saturday = 'Thu Bay',
    Sunday = 'Chu Nhat' 
}
for (const day in Weekdays){
    if(isNaN(Number(day))){
        console.log(day);
    }
}