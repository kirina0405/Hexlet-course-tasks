// -------------Task 1------------------
import { length, toUpperCase, toLowerCase } from './strings'; // eslint-disable-line

const invertCase = (str) => {
  let strNew = '';
    for (let i = 0; i <= str.length; i++) {
      if (i === str.length) {
          return strNew;
    } else if (str[i] !== str[i].toUpperCase()) {
        strNew = strNew + str[i].toUpperCase();
    } else {
        strNew = strNew + str[i].toLowerCase();
    }
  }
}
export default invertCase;

// -------------Task 2---НЕ ЗАКОНЧЕНО!!!!---------------

const withoutTwoZeros = (n, m) => {
  let number = '';
  let counter = 0;
  while (counter <= n+m){
    counter++;
    for (let i = 0; i <= n; i++) {
      if (number[i] === '0' || number[i+1] === '0') {
        break;
      } else {
        number = number + '0';
        console.log(`!? ${number}`);
      }
      for (let j = 0; j <= m; j++) {
        if (number.length <= n + m) {
          console.log(`$$ ${number.length}`);
          break;
        } else {
          number = number + '1';
          console.log(`!!?? ${number}`);
        }
      }
    } 
  } return counter;
}

withoutTwoZeros(3, 4);

//-------------------------Task 3------------
const sumSquareDifference = (n) => {
  let sum = 0;
  let squar = 0;
  for (let i = 1; i <= n; i++) {
    squar += i ** 2;
    sum += i; 
  }
  return sum ** 2 - squar;
}

export default sumSquareDifference;

//-------------------------Task 4------------
const reverse  = (str) => {
  const n = str.length;
  let str_reverse = '';
  for (let i = 0; i < n; i++) {
    str_reverse += str[n-i-1];
  } 
  return str_reverse;
}

reverse('dfsdfsfdzSDZsd');

// ----Task 4 с рекурсией--------

const reverse  = (str) => {
  const n = str.length;
if (n === 0) {
  return str;
}
return str[n-1] + reverse(substr(str, 0, len -1));
};

export default reverse;

// ----Task 5 --------
const fizzBuzz  = (begin, end) => {
  let n = begin;
  while (true ) {
    if (begin > end || n > end) {
       break;
    } else if (n%3 === 0 && n%5 === 0) {
      console.log('FizzBuzz');
    } else if (n%3 !== 0 && n%5 === 0) {
      console.log('Buzz');
    } else if (n%3 === 0 && n%5 !== 0) {
      console.log('Fizz');
    } else if (n%3 !== 0 && n%5 !== 0) {
      console.log(n)
    }  n++;
  }
};

export default fizzBuzz;
// ----Task 5 var teacher--------
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const maybeFizz = i % 3 === 0 ? 'Fizz' : '';
    const maybeBuzz = i % 5 === 0 ? 'Buzz' : '';
    const output = `${maybeFizz}${maybeBuzz}`;
    console.log(output === '' ? i : output);
  }
};

export default fizzBuzz;

