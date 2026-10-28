//dasgal1
///for (let i = 0; i <= 10; i++) {
//let rightPocket = 10 - i;
//console.log(`${i} + ${rightPocket} = 10`);
//}
//dasgal2
//let row = "";
//for (let i = 0; i < 8; i++) {
//if (i % 2 === 0) {
//row += "⬛";
//} else {
// row += "⬜";
// }
//
//console.log(row);
//dasgal3
//for (let i = 1; i <= 50; i++) {
//if (i % 7 === 0 || i % 10 === 7) {
//console.log(i);
//}
//}
//dasgal4
// const totalFloors = Number(prompt("Хэдэн давхарт амьдардаг вэ?"));

// for (let floor = 1; floor <= totalFloors; floor++) {
//   if (floor === totalFloors) {
//     console.log(`${floor}-р давхар — гэртээ ирлээ 🏠`);
//   } else {
//     console.log(`${floor}-р давхар`);
//   }
// }
//dasgal5
//let sondgoiNiilber = 0;
//let tegshNiilber = 0;
//for (let too = 1; too <= 20; too++) {
//if (too % 2 === 1) {
//sondgoiNiilber += too;
//} else {
//tegshNiilber += too;
//}
//}
//console.log(tegshNiilber);
//console.log(sondgoiNiilber);
const huvaagch = 13;
let hamgiinIhToo = 0;
for (let too = 0; too <= 100; too++) {
  if (too % huvaagch === 0) {
    if (hamgiinIhToo <= too) {
      hamgiinIhToo = too;
    }
  }
}
console.log(hamgiinIhToo);
