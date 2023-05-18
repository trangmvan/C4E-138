// // BT1
for (;true;){
    a=Number(prompt("Mời bạn nhập giá trị a:",20));
        if (a<2){
            alert('Không có số nguyên tố nào nhỏ hơn 2')
        }
        else if (a>2){
            break
        }
    }
for (;true;){
    b=Number(prompt("Mời bạn nhập giá trị b (b>a):",50))
        if (b>a){
            break;
        }
    }
let sumArray=[];
for (j=a;j<=b;j++){
    let checkSoNguyenTo=0;
    for (let i=1;i<=j;i++){
        if (j%i===0){
            checkSoNguyenTo+=1
        }
    }
    if (checkSoNguyenTo===2){
        sumArray.push(j);
       
    }

}
const sum=sumArray.reduce((partialSum, x) => partialSum + x, 0);
document.write(`Tổng các số nguyên tố trong khoảng từ ${a} đến ${b} là: ${sum}`)


// BT2:

for (;true;){
        m=Number(prompt(`Nhập chiều rộng tam giác:`,4));
        if (m>=1 && m<=10){
            break;
        }
    }

function numberOneTriangle(z){
    let hinhTamGiac=``;
    for (i=1;i<=z;i++){
        hinhTamGiac+=`*`;
        document.writeln(hinhTamGiac)
        document.write("<br>");
    }

}
numberOneTriangle(m);
