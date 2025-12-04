function Name(input){
    var name = ["Ivan", "Maria", "Petar", "Ana", "Stefan"];
    var n = input;
    for(i = 0;  i < 5; i++)
        if(n >= name[i].length)
    console.log(name[i]);
    
}
function Calendar(input){
   let months = [];
   for( i = 0; i < input.length; i++){
    let value = input[i];    
    months.push(value);
   }
     console.table(months);
   months.splice(months.indexOf(months[5]), 1);
   months.splice(months.indexOf(months[7]), 1);
        console.table(months);

   
} Calendar(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);


Name(4);