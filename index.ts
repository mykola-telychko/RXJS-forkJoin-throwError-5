import { delay, catchError } from 'rxjs/operators';
import { forkJoin, of, throwError } from 'rxjs';

/*
  Emit values from successfully completed
  inner observables.
*/
const example = forkJoin({
  // emit 'Hello' immediately
  sourceOne: of('Hello'),
  // emit 'World' after 1 second
  sourceTwo: of('World').pipe(delay(1000)),
  // throw error
  sourceThree: throwError('This will error').pipe(catchError(error => of(error)))
});

/*
 * Output:
 * {
 *   sourceOne: "Hello",
 *   sourceTwo: "World",
 *   sourceThree: "This will error"
 * }
 */
const subscribe = example.subscribe(val => console.log(val));