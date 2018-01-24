//------------4.2 GUARD EXPRESSION-----------
//----var 1-----
import { length, substr } from './strings';

// BEGIN (write your solution here)
const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++){
    if (str[i] !== str.substr(str.length - i - 1, 1)){
      return false;
    } 
  } return true;
}
  export default isPalindrome;

//-----var 2--------
const isPalindrome = (str) => {
  let i = 0;
  while (i < str.length){
    if (str[i] !== str.substr(str.length - i - 1, 1)){
      return false;
    } i++;      
  } return true;

}
isPalindrome();

//-----var 3--Рекурсия-------
import { length, substr } from './strings';

const isPalindrome = (str) => {
    const n = str.length;
    if (n%2 === 0) {
      if (str[n/2 - 1] === str[n/2]){
        return true;
      } else {
        return false;
      }
      return isPalindrome(str.substr(n - 1, n - 1));
    } else if (str[(n + 1)/2 - 2] === str[(n + 1)/2]) {
        return true;
      } else {
        return false;
      }
      return isPalindrome(str.substr(n - 1, n - 1));
}
  export default isPalindrome;

//----------4.3 ПАРАМЕТРЫ ПО УМОЛЧАНИЮ----------------------

import { getLength } from './strings'; // eslint-disable-line

const substr = (str, i = 0, n = str.getLength) => {
  if (n < 0) {
    return str.substr(i, 1);
  }
  if (n === 0) {
    return '';
  }
  if (n + str[i] > str.getLength) {
    return str.substr(i, str.getLength - 1);
  }
  if (i < 0) {
    return str.substr(0, n);
  }
  if (i >= str.getLength) {
    return '';
  }
    return str.substr(i, n);
}

export default substr;

//--------------4.4 Выполнение функций------------------

import { table, tr, td } from './tags';

const buildHtml = () => table(
  tr(td('lang'), td('comment')),
  tr(td('php'), td('statements')),
  tr(td('clojure'), td('expressions'))
  );

export default buildHtml;

//----------------4.5 Объекты 1-го класса----------------
const apply = (m, f, n) => {
  const itet = (m, n) => {
    if (m === 0) {
    return n;
  }
  return itet(m-1, f(n));
  }
  return itet(m, n);
}

export default apply;

//---------------4.7 Возврат функций из функций---------------------------------

const sub  = () => {
  const flip = (b, a) => a - b;
  return flip;
}
export default sub;

const wop = () => {
  const flip = (b, a) => Math.pow(a, b);
  return flip;
}
export default wop;

//---------------4.8 Частичное применение--------------------------

const partialApply = (f, a) => b => f(a, b);
export default partialApply;

// ---- или --------
export default (f, a) => b => f(a, b);

//------------4.8 Каррирование-------
import { If, True, False } from './logic';

If(True)('one')('two'); // one
If(False)('one')('two'); // two

// -------Решение--------
export const True = x => () => x;
export const False = () => y => y;

export const If = f => f;