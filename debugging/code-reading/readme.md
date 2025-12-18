# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    f1();
8    console.log(x);
```

Explain why line 5 and line 8 output different numbers.
// Line 5 will give a log of 2 as it is operating inside the function and line 8 will log 1 as it is taking the x from the global scope

## Question 2

Take a look at the following code:

```js
let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1());
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
// 10 from the log of line 29, then undefined when we log the function that doesn't return anything, then refference error because y is only defined within the function scope

## Question 3

Take a look at the following code:

```js
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
//Line 52 returns 10, as function takes a copy of the value of x adding 1.
//Line 53 logs 9 as it takes the unchanged x from the global scope. 
//Line 62 returns 10 as function f2 changes the property x of the object. 
//Line 63 logs the modified object {x: 10}
