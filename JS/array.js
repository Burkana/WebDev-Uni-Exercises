function SumUp () {
    let arr = [1, 2, 3, 20, 10];
        
        let sum = arr[arr.length-1] + arr[0];
        console.log(`${sum}`);
}
 SumUp();
 function sliceUp(){
   let arr =  [80, 20, 10];
   let arr2 = [30, 22, 50];
   let arr3 = [90, 80 ,70];
   
    let newArr = arr.concat(arr2, arr3);
    if(newArr.indexOf(22) !== -1){
        newArr.splice(newArr.indexOf(22), 1);
    }
    console.table(newArr);

 }
    sliceUp();

    function checker(){
        var a = 5;
        console.log(typeof(a));
         a = "das";
        console.log(typeof(a));
         a = [1,2,3];
        console.log(typeof(a));
    }

    checker();