import { delay, catchError } from 'rxjs/operators';
import { forkJoin, of, throwError } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin
/*
  Emit values from successfully completed
  inner observables.
*/
const example = forkJoin({
  // emit 'Hello' immediately
  srcOne: of('Hello'),
  // emit 'World' after 1 second
  srcTwo: of('World').pipe(delay(6000)),
  // throw error
  srcThree: throwError('This will error').pipe(
    catchError((error) => of(error))
  ),
});

const subscribe = example.subscribe((val) => console.log(val));
