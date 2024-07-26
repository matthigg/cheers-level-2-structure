import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcoholic',
  standalone: true
})
export class AlcoholicPipe implements PipeTransform {

  transform(value: boolean | undefined, ...args: unknown[]): 'Alcoholic' | 'Non alcoholic' | 'Unknown' {
    if (value === true) return 'Alcoholic';
    if (value === false) return 'Non alcoholic';
    return 'Unknown';
  }

}
