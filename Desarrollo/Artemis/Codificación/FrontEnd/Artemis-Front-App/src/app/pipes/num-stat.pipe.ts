import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numStat',
})
export class NumStatPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string | number {
    const miles = 1000;
    const millones = 1000000;

    if (value >= millones) {
      return `${(value / millones).toFixed(1)}M`;
    } else if (value >= miles) {
      return `${(value / miles).toFixed(1)}k`;
    } else {
      return value;
    }
  }
}
