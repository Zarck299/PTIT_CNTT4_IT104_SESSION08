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
    console.log(Weekdays[day as keyof typeof Weekdays]);
}