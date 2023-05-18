const arr=[2,5,8,1,-4,5,10,9];

for (let i=0;i<arr.length;i++){
    if (arr[i]<=1){
        console.log(`${arr[i]} khong la so nguyen to`)
    }
    else {
        let checkSoNguyenTo=0;
        for (let j=1;j<=arr[i];j++){
            if (arr[i]%j===0){
                checkSoNguyenTo+=1;
            }
        }
        if (checkSoNguyenTo===2){
            console.log(`${arr[i]} la so nguyen to`)}
        else {
            console.log(`${arr[i]} khong la so nguyen to`)
        }
    }
}
    