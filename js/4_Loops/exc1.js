//exc_1






function sumDur(arr){
    let res=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            res=res+arr[i][j];
    }
}
return res;

console.log(sumDur())