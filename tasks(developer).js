// -----------3.5 Функции и ящики----------------------

const squareOfSum = (a, b) =>
  (a * a) + (2 * a * b) + (b * b);

// -----------3.6 Условия и принятие решений----------------------
const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
};

// ----------------------3.8 Рекурсия-------------------------

  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);

// ----------------3.9 Итеративный процесс----------------------

const smallestDivisor = (num) => {
  if (num <= 0) {
    return NaN;
  } else if (num === 1) {
    return 1;
  } else {
      let divisor = 2;
      while (divisor <= num) {
        let remainder = num%divisor;
        if (remainder === 0) {
          return divisor;
        } else {
          divisor++;
        }
      }
  }
};
  
  smallestDivisor(17);

  //------------------v.2- (+ рекурсия) -------------------

const smallestDivisor = (num) => {
  if (num === 1) {
    return num;
  } else {
      const iter = (divisor, remainder) => {
        if (remainder === 0) {
            return divisor;
        } 
        return iter(divisor+1, num%(divisor+1));
  }
  return iter(2, num%2);
  }
};

smallestDivisor(3);

// ----------------3.11 Строки-----------------

const reverse = (str) => {
  let i = 0;
  let str_reverse = '';
  while (i < str.length) {
    str_reverse = str_reverse + str[str.length - i - 1];
    i = i + 1;
  }
  return str_reverse;
}
export default reverse;;

// ------------------ 3.12 Циклы---------------------------
const isPrime = (num) => {
  if (num > 1 && num <= 3) return true;
  if (num <= 1 || num > 3 && num%2 === 0) return false;
  for (let i = 3; i < (num-1)/2;  i++) {
    if (num%i === 0) {
      return false;
    }       
  }
  return true;
};

isPrime();

export default isPrime;

// ------------------3.13 Тесты---------------------------
import assert from 'assert';
import { factorial } from './implementations';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert(factorial(5) === 120);

// BEGIN (write your solution here)

// END

// -------------3.14 Модули--------------------
// --solution.js--
import { getTriangleArea } from './myMathModule.js';

export const square = (n) => n**2;

export default function solution(n) {

  return getTriangleArea(n, square(n)/2);
}

solution(10);

//--myMathModule.js--
export const getTriangleArea = (h, b) => 1/2 * h * b;

getTriangleArea(5, 10);
getTriangleArea(15, 12);

// -------------3.15 Выражения и инструкции--------------------
// BEGIN (write your solution here)

// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};

// ---------3.16 Окружение------------------------
import { length, toUpperCase } from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str.toUpperCase()[i]) {
        count = count + 1;
      } 
    }
      return(count);
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
    if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  } else {
    return 0;
  }
  // END
};

export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) =>
  compare(first, second) === 0;

// ------------------3.17 Типизация---------------------------

import { length } from './strings'; // eslint-disable-line

const sumDigits = (num) => {
  const str = String(num);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + +str[i];
  }
  return sum;
  }
  
const addDigits = (num) => {
  const sum = sumDigits(num);
  const addSum = sumDigits(sum);   
return addSum;
  }

export default addDigits;

// --------------------3.18 Чистые функции----------------------

const solution = (str) => {
  let strNew = '';
  if (str[0] === '\u0020'){
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === '\u0020' && str[i+1] !== '\u0020') {
        strNew = strNew + str[i] + str[i+1].toUpperCase();
        i++;
      } else if (i === str.length) {
          return strNew;
      } else {
        strNew = strNew + str[i];
      }
    }  
  } else {
      for (let i = 1; i <= str.length; i++) {
        if (str[i] === '\u0020' && str[i+1] !== '\u0020') {
          strNew = strNew + str[i] + str[i+1].toUpperCase();
          i++;
        } else if (i === str.length) {
            return str[0].toUpperCase() + strNew;
        } else {
          strNew = strNew + str[i];
        }
      }    
  }
}
solution(' many different words inside sentence');

