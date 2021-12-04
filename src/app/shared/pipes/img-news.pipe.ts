import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgNews',
})
export class ImgNewsPipe implements PipeTransform {
  defaultImage: string = '../../../../../assets/img/news-placeholder.webp';

  async transform(url: string) {
    if (await this.verifyImage(url)) {
      return url;
    }
    return this.defaultImage;
  }

  async verifyImage(url: string) {
    if (!url) {
      return false;
    }
    return new Promise((res) => {
      const image = new Image();
      image.onload = () => res(true);
      image.onerror = () => res(false);
      image.src = url;
    });
  }
}
