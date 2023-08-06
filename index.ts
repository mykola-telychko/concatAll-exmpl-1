import { map, concatAll, filter } from 'rxjs/operators';
import { of, interval } from 'rxjs';

// https://mydaytodo.com/filter-array-observable-angular/
// https://www.learnrxjs.io/learn-rxjs/operators/combination/concatall

//emit a value every 2 seconds
const source = interval(2000);

const src$ = source.pipe(
  //for demonstration, add 10 to and return as observable
  map((i) => of(i + 10)),
  //merge values from inner observable
  concatAll()
);

// 1)
// const subscribe = src$.subscribe((val) =>
//   console.log('Example with Basic Observable:', val)
// );

// 2)
// const subscribe = src$.subscribe((val) => {
//   if (val % 2 === 0) {
//     console.log('not even num: ', val);
//   } else {
//     console.log('even num: ', val);
//   }
// });
