// //BT1
// for (let i=1;i<=500;i++){
//     console.log(i)
// }

//BT3
sumBT2=0
for (let x=-30;x<=50;x+=2){
    sumBT2+=x
}
console.log(sumBT2)

//BT8
let primeNumber=Number(prompt("Moi ban nhap gia tri",10));
for (let i=2;i<primeNumber;i++) {
    if (i<primeNumber){
        primeNumber%i===0;
        break;
    }
   else console.log(`${primeNumber} is a prime number`);
    
}

// //BT6: Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau

// for (;true;){
//     n=Number(prompt('Nhap n>=2:',6))
//     if (n>=2){
//         break;
//     }
// }
// let mauSo=1;
// let sum=0;
// for (let i=1; i<=n;i++){
//         mauSo=i*(i+1);
//         let phanSo=1/mauSo;
//         sum+=phanSo;
// }
// console.log(sum)

// // BT7: Nhập vào số n. Hãy in ra số ước của n.

// let n=Number(prompt('Nhap n:',6));
// let m=Math.abs(n);
// let soUoc=0;
// for (let i=1; i<=m;i++){
//     if (m%i===0){
//         soUoc+=1;
//     }
// }
// console.log(soUoc)

// //BT8: Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không

// let n=Number(prompt('Nhap n:',6));
// checkSoNguyenTo=0;
// for (let i=2;i<n;i++){
//     if (n%i===0){
//         console.log(`${n} khong phai la so nguyen to`)
//         break
//     }
//     else{
//         checkSoNguyenTo+=1;
//     }
// }
// if (checkSoNguyenTo===n-2){
//     console.log(`${n} la so nguyen to`)
// }

//BT9: Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.

// s=String(Number(prompt('Nhap vao 1 so bat ki:',555555)));
// l=Number(prompt('Hay nhap 1 so bat ki khac:',10));
// stringLength=s.length;

// do {
//     s=`0`+s;
//     stringLength+=1;
// }
// while (stringLength<=l)

// console.log(s);
// console.log(stringLength)

// //BT10: Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n

// for (;true;){
// n=Number(prompt('Nhap n:',10))
//     if (n>0){
//         break;
//     }
// }
// for (;true;){
// m=Number(prompt('Nhap m:',5))
//     if (m>0){
//         break;
//     }
// }
// maxUocChung=0;
// for (let i=1;i<=m || i<=n;i++){
//     if (m%i===0 && n%i===0){
//         maxUocChung=i;
//     }
// }
// console.log (maxUocChung)

//BT 11: Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n.
// for (;true;){
// n=Number(prompt('Nhap n:',10))
//     if (n>0){
//         break;
//     }
// }
// for (;true;){
// m=Number(prompt('Nhap m:',5))
//     if (m>0){
//         break;
//     }
// }
// for (i=m;i<=m*n;i++){
//     if (i%m===0 && i%n===0){
//         console.log(i)
//         break
//     }
    
// }

// //BT12: Trò chơi đoán số:
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.

// let correct=Math.floor(Math.random()*20+1);
// let attempt=0;

// for (let i=1;i<=5;i++){
//     answer=Number(prompt('Moi ban nhap answer:',))
//     if (answer==correct){
//         console.log('Doan dung');
//         break;
//     }
//     else {
//         attempt+=1;
//         if (attempt<5){
//             console.log('Doan sai')
//         }
//         if (attempt==5){
//             console.log('Ban da thua cuoc')
//         }
//     }
// }

// //BT 15: Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.

// for (;true;){
//     m=Number(prompt('Nhap chieu rong m:',));
//     if (m>=2){
//         break;
//     }
// }
// for (;true;){
//     n=Number(prompt('Nhap chieu cao n:',));
//     if (n>=2){
//         break;
//     }
// }
// hinhChuNhat='';
// for (let i=1; i<=n;i++){
//     for (let j=1;j<=m;j++){
//         hinhChuNhat+=`*`;
//     }
//     console.log(hinhChuNhat);
//     hinhChuNhat=``;
// }



