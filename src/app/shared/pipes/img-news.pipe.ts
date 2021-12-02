import { Pipe, PipeTransform } from '@angular/core';
import { SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'imgNews',
})
export class ImgNewsPipe implements PipeTransform {
  transform(value: string) {
    if (value === '') {
      return '../../../../../assets/img/news-placeholder.webp';
    } else {
      return value;
    }
  }
}
