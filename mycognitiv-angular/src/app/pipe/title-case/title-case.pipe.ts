import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/_/g, ' ') 
      .replace(/\b\w/g, firstChar => firstChar.toUpperCase());
  }

}
