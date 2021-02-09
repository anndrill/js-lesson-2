//Задание 1.

// var a = 1, b = 1, c, d;
// c = ++a; console.log(c);           // 2      префиксная инкремента, увеличивает значение a на единицу и возвращает новое значение в c;
// d = b++; console.log(d);           // 1      постфиксная инкремента, сначала возвращает в d старое значение b, а потом увеличивает b на единицу;
// c = (2 + ++a); console.log(c);      // 5     с = 2 + (увеличиваем на единицу a, которая уже была увеличена выше, то есть ++a = 2+1) = 2 + 3 = 5;
// d = (2 + b++); console.log(d);      // 4     d = 2 + (уже увеличенная выше b = 2) = 2 + 2 = 4, а потом уже в b записалось еще одно увеличение на единицу;
// console.log(a);                    // 3      a = 1 выше увеличили на единицу дважды, то есть a = a + 1 + 1 = 3;
// console.log(b);                    // 3      аналогично.

//Задание 2.

// var a = 2;
// var x = 1 + (a *= 2);
// console.log(x);                  // 5

//Задание 3.

// let a = 4, b = 2;
// if (a > 0 && b > 0) {
//     console.log(a - b);
// }
// else if (a < 0 && b < 0) {
//     console.log(a * b);
// }
// else {
//     console.log(a + b);
// }

//Задание 4. 

// let a = 13;
// switch (a) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     case 4:
//         console.log(4);
//         break;
//     case 5:
//         console.log(5);
//         break;
//     case 6:
//         console.log(6);
//         break;
//     case 7:
//         console.log(7);
//         break;
//     case 8:
//         console.log(8);
//         break;
//     case 9:
//         console.log(9);
//         break;
//     case 10:
//         console.log(10);
//         break;
//     case 11:
//         console.log(11);
//         break;
//     case 12:
//         console.log(12);
//         break;
//     case 13:
//         console.log(13);
//         break;
//     case 14:
//         console.log(14);
//         break;
//     case 15:
//         console.log(15);
//         break;
// }	

//Задание 5.

// let a = 3;
// let b = 5;

// function plus(a, b) {
//     return a + b;
// };
// function minus(a, b) {
//     return a - b;
// };
// function multy(a, b) {
//     return a * b;
// };
// function split(a, b) {
//     return a / b;
// };

//Задание 6.

// function mathOperation(a, b, operation) {
//     switch (operation) {
//         case plus:
//             return a + b;
//             break;
//         case minus:
//             return a - b;
//             break;
//         case multy:
//             return a * b;
//             break;
//         case split:
//             return a / b;
//             break;
//     }
// }

//Задание 7.

// console.log(null == 0);     //false
// console.log(null > 0);      //false
// console.log(null < 0);      //false
// console.log(null >= 0);     //true
// console.log(null <= 0);     //true

//честно признаюсь, что загуглила. Нашла такой ответ - проверка равенства и операции сравнения работают по-разному.
//При сравнении null преобразуется в 0, а при проверке равенства нет. Поэтому такой результат. Это корректно? 

//Задание 8. 

function power(val, pow) {
    let result = 1;
    for (i = 0; i < pow; i++) {
        result *= val;
    }
    return result;
}
console.log(power(3, 3));