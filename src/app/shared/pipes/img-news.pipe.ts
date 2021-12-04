import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgNews',
})
export class ImgNewsPipe implements PipeTransform {
  defaultImage: string = '../../../../../assets/img/news-placeholder.webp';

  async transform(url: string) {
    if (url === '' || (await this.verifyImage(url)) !== 200) {
      return this.defaultImage;
    }
    return url;
  }

  async verifyImage(url: string) {
    const response = await fetch(url);
    return response.status;
  }
}
