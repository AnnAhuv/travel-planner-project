//exc_9
function collectSort(arr,bud){
    let cou=0;
    for(let i=0;arr[i]<bud;i++)
    cou++;
    return cou;


}


console.log(collectSort( [50, 100, 75, 125, 200] ,  150));//output:4