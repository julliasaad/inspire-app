import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'codigobarramascarado'})
export class CodigoBarraMascaradoPipe implements PipeTransform {
  transform(value: Array<string>, args: string[]): any {
    if (!value) return value;

    console.log(value);

    value = value.map(s => {
      if (s.length > 3) {
        return new Array(s.length - 3).join('#') + s.substring(s.length - 3,  s.length);
      }

      return s;
    });

    let formatted = value.toString().split(',').join(', ');
    formatted = `(${formatted})`;

    return formatted
  }
}