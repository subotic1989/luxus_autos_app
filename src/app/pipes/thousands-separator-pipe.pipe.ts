import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandsSeparatorPipe',
})
export class ThousandsSeparatorPipePipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
