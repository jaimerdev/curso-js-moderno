// for(let i = 0; i < 10; i++) {
//     console.log(`Número: ${i}`);
// }

let par;

for(let i = 1; i < 100; i++) {
    par = i % 2;
    if(par === 0) {
        console.log(`Número: ${i} es par`)
    } else {
        console.log(`Número: ${i} es impar`)
    }
}