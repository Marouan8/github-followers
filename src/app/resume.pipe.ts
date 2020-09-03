import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {
  myLimit: number;
  transform(value: string, limit?: number): any {
    if(!value) {
      return null;
    }

    this.myLimit = (limit) ? limit : 30 ;
    return value.substr(0,this.myLimit) + '...';
  }

}
