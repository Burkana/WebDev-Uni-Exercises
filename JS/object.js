function Listen(typeList, name, time){
let Song = {
    typeList:typeList,
    name:name,
    time:time
};
return console.table(Song);
}
Listen("Music", "TooGud", 100);

function Personnel (){
let employee = {
    name: 
    [ 
        'Kamen ',
        'Gosho',
        'Marin'
    ]
};
for(var i = 0; i < employee.name.length; i++){

    console.log(`Names: ${employee.name[i]} -- Personal Count: ${employee.name[i].length}`);

}
}

Personnel();
