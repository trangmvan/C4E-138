// console.log("BT1")
// let x=true;
// let y=true;
// let z=false;

// console.log(x && y && z) //false
// console.log(x && y && !z) //true
// console.log((x && y) || z ) //true
// console.log((x && y) || !z ) //true
// console.log(x && (y || z) ) //true
// console.log(x && !(y || z) ) //false
// console.log(x && (y || !z) ) //true
// console.log(x && (!y || z) ) //false

// // BT2:
// console.log("BT2")
// let name1= 'AAA';
// let age = 20;
// let isGood = true;

// console.log(age+10) //30
// console.log(age%3) // 2
// console.log(name1+'BBB') //AAABBB
// console.log(!isGood) //false
// console.log(name1 == 'aaa' && age >= 20) //false
// console.log(name1 != 'aaa' && isGood ) //true
// console.log(!(age < 10) && !isGood) //false

// //BT3:
// console.log("BT3")
// let a=10;
// let b=20;
// let c=30;
// let d='40';

// console.log(a + b + c) //60
// console.log(a - b / c) // 9.3
// console.log(a - (b * c)) //-590
// console.log(d - (a * b) - c)  //-190
// console.log(a + b + c + d ) //6040
// console.log(d + a + b + c  ) //40102030
// console.log(d + a - b + c  ) //4020
// console.log(a - b + d - c  ) //-1070
// console.log(d - c + a - b  ) //0
// console.log(a * b + d * c ) //1400

// // BT4:
// console.log("BT4")
// let x = true, y = false, z = 10;

// console.log(x && y ) // false
// console.log(x && !y ) //true
// console.log(x && z == 10 ) //true
// console.log((x && z == 10) ) //true
// console.log(!(x && z == 10) ) //false
// console.log(!(x && z == 50) ) //true

// console.log(x && y && z == 10 ) //false
// console.log(x && !y && z == 10 ) //true
// console.log(x || y || z == 10 ) //true
// console.log((x && y) || z != 10 ) //false
// console.log(!(x && z == 10) || y ) //false

// //BT5:
console.log("BT5")
let a = 1, b = '2', c = 3, d = '4';

console.log(b + d ) //24
console.log(a + b + c + d ) //1234
console.log(a - b + c - d ) // -2
console.log(a - b - c + d ) //-44
console.log((b + d) - (a + c) ) //20
console.log((a + b) - (c + d) ) //-22
console.log(a * c + b * d ) //11
console.log(-b + d ) //-24
console.log(-b - d ) //-6
console.log(-(b + d) ) //-24

//BT6:
console.log("BT6")
let age = 25, isMarried = false, isRich = true;

console.log(age > 25 && isMarried && isRich ) //false
console.log((age <= 25 || isMarried) && isRich ) //true
console.log((age > 10 || isRich) && isMarried ) // false
console.log(!(age >= 15 && isMarried) && isRich ) // false
console.log(!(age <= 20) || !(isMarried && isRich) ) // true
console.log((age > 8 && !isMarried) || isRich ) // true
console.log(!(age < 8 && !isMarried) || isRich ) // true
console.log((age == 8 && isMarried) || !isRich ) // false


