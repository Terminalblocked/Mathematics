// Realization with loop
/* let i = 1;
while(i < 1000) {
    if(i % 2 == 0) {
        console.log(` ${i} - ը զույգ թիվ է `);
    } else {
        console.log(` ${i} - ը կենտ թիվ է `);
    }
    i++;
} */

// Realization using method prompt()

/* const answer = +prompt(` Input a number `);
answer % 2 == 0 ? alert(` ${answer} - ը զույգ թիվ է `) : alert(` ${answer} - ը կենտ թիվ է `); */

// Fibonacci numbers

/* const answer = +prompt(` Քանի թիվ տպեմ? `);
let cur = 1, prev = 0;

for(let i = 1; i <= answer; i++) {
    console.log(prev);
    let temp = cur + prev;
    prev = cur;
    cur = temp;
} */