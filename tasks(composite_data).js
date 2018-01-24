//------------6.2 Точки-----------
import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line

// BEGIN (write your solution here)
export const quadrant = (point) => {
  if (getX(point) === 0 || getY(point) === 0) return null;
  if (getX(point) === 0 && getY(point) === 0) return null;
  if (getX(point) > 0 && getY(point) > 0) return 1;
  if (getX(point) < 0 && getY(point) > 0) return 2;
  if (getX(point) < 0 && getY(point) < 0) return 3;
  if (getX(point) > 0 && getY(point) < 0) return 4;
}

export const symmetricalPoint = (point) => makePoint(-getX(point), -getY(point));

export const distance = (point, point2) => Math.sqrt((getX(point2) + -getX(point)) ** 2 + (getY(point2) + -getY(point)) ** 2);

//-----------------6.3 Пары----------------------
//=================================
//...reversePair...
import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line
const reversePair = (pair) => cons(cdr(pair), car(pair));
export default reversePair;

//...sumOfPairs...
import { cons, car, cdr, toString } from 'hexlet-pairs'; // eslint-disable-line
const sumOfPairs = (pair1, pair2) => cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));
export default sumOfPairs;

//...findPrimitiveBox...
import { cons, car, cdr, isPair, toString } from 'hexlet-pairs';

const findPrimitiveBox = (pair) => {
  const counterBox = (counter, pair) => {
    if (isPair(car(pair)) === false && isPair(cdr(pair)) === false) {
      return pair;
    } else if (isPair(car(pair)) === true && isPair(cdr(pair)) === false) {
      return counterBox(counter + 1, car(pair));
    } else if (isPair(car(pair)) === false && isPair(cdr(pair)) === true) 
      return counterBox(counter + 1, cdr(pair));
    }
    return counterBox(0, pair);
}
export default findPrimitiveBox;

// ...... проверка тестом.......
test('findPrimitiveBox', () => {
  const pair1 = cons(
    cons(1, cons(cons(true, 5), null)),
    8,
  );
  expect(toString(findPrimitiveBox(pair1))).toBe(toString(cons(true, 5)));

  const pair2 = cons(
    null,
    cons(cons('hello', cons(0, cons(null, 'ehu'))), null),
  );
  expect(toString(findPrimitiveBox(pair2))).toBe(toString(cons(null, 'ehu')));

  const pair3 = cons(
    false,
    cons('one', true),
  );
  expect(toString(findPrimitiveBox(pair3))).toBe(toString(cons('one', true)));
});

//...findPrimitiveBox (учитель)...
const findPrimitiveBox = (pair) => {
  const first = car(pair);
  const last = cdr(pair);

  if (!isPair(first) && !isPair(last)) {
    return pair;
  }

  const next = isPair(first) ? first : last;
  return findPrimitiveBox(next);
};

//==========================================================

//----------6.4 Моделирование-----------------
//...segments (учитель)...

export const makeSegment = (point1, point2) => cons(point1, point2);

export const startSegment = segment => car(segment);

export const endSegment = segment => cdr(segment);

export const segmentToString = segment =>
  `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;

export const midpointSegment = (segment) => {
  const startPoint = startSegment(segment);
  const endPoint = endSegment(segment);
  const x = (getX(startPoint) + getX(endPoint)) / 2;
  const y = (getY(startPoint) + getY(endPoint)) / 2;

  return makePoint(x, y);
};

// ...my decition...
export const makeSegment = (point1, point2) => cons(point1, point2);
export const startSegment = (segment) => car(segment);
export const endSegment = (segment) => cdr(segment);

export const segmentToString = (segment) => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;
export const midpointSegment = (segment) => makePoint((getX(startSegment(segment)) + getX(endSegment(segment))) / 2, (getY(startSegment(segment)) + getY(endSegment(segment))) / 2);

console.log(pointToString(startSegment(segment)));
console.log(pointToString(endSegment(segment)));
console.log(segmentToString(segment));
console.log(pointToString(midpointSegment(segment)));
//====================================

//------------6.5 Барьеры абстракции----------

import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

export const makeRectangle = (p, a, b) => cons(p, cons(a, b));

export const startPoint = rectangle => car(rectangle);
export const width = rectangle => car(cdr(rectangle));
export const height = rectangle => cdr(cdr(rectangle));

export const square = rectangle => width(rectangle) * height(rectangle);
export const perimeter = rectangle => (width(rectangle) + height(rectangle)) * 2;
export const containsTheOrigin = rectangle => (getX(startPoint(rectangle)) < 0 && getY(startPoint(rectangle)) > 0 && (getX(startPoint(rectangle)) + width(rectangle)) > 0 && (getY(startPoint(rectangle)) - height(rectangle)) < 0 ) ? true : false;

//...segments (учитель)...
export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const startPoint = rectangle => car(rectangle);
export const height = rectangle => cdr(cdr(rectangle));
export const width = rectangle => car(cdr(rectangle));

export const square = rectangle => height(rectangle) * width(rectangle);
export const perimeter = rectangle => 2 * (height(rectangle) + width(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = startPoint(rectangle);
  const point2 = makePoint(getX(point1) + width(rectangle), getY(point1) - height(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};

//--------------6.6 Реализация пар -----------------
//...segments (учитель)...
export const car = z => z((x, y) => x);
export const cdr = z => z((x, y) => y);