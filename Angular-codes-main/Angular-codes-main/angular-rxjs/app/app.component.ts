import { Component } from '@angular/core';
import { from, Observable, asyncScheduler, of, interval, fromEvent, range } from 'rxjs';
import { take, map, takeUntil, mapTo, reduce, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-operators';

  //1. from operator
  /* output1 = console.log('start');

  array1 = [1, 2, 3];
  result1$ = from(this.array1).subscribe(x => console.log(x)); */

  /* result2$ = from(this.array1, asyncScheduler).subscribe(x => console.log(x));

  output2 = console.log('end'); */


  //2. of operator
  /* result3 = of(10, 20, 30)
    .subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('the end'),
    );

  result4 = of([1,2,3])
    .subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('the end'),
    ); */

  //3. interval operator - Emits ascending numbers, one every second (1000ms) up to four numbers
  /* numbers = interval(1000);
  takeFourNumbers = this.numbers.pipe(take(4))
    .subscribe(x => console.log('Next: ', x)); */


  //4. map operator
  /* array2 = [1, 2, 3];
  result4$ = from(this.array2).pipe(map(x => 10*x)).subscribe(x => console.log(x)); */

  //5. reduce operator [ capturing number of clicks in 5 seconds]
  clicksInFiveSeconds = fromEvent(document, 'click').pipe(
    takeUntil(interval(5000)),
  );
  ones = this.clicksInFiveSeconds.pipe(mapTo(1));
  seed = 0;
  count = this.ones.pipe(reduce((acc, one) => acc + one, this.seed));
  result5 = this.count.subscribe(x => console.log('clicks in 5 seconds : ' +x));

  //6. filter operator
  /* source = from([1, 2, 3, 4, 5]);
  example = this.source.pipe(filter(num => num % 2 === 0))
   .subscribe(val => console.log(`Even number: ${val}`)) */

  //7. range operator
  //numbers = range(1, 10).subscribe(x => console.log(x));




}
