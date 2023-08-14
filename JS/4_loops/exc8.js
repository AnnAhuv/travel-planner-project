//exc_8
function expensive(arr){
    let hightPrice=0;
    for(let i=0;arr[i]<arr.length; i++){
    if(arr[i]>hightPrice){
    hightPrice=arr[i];
    }
   
}
return hightPrice;
}
    
    
    console.log(expensive(  [50, 100, 75, 125, 200]));//output:200