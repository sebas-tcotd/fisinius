import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe que determina si una imagen recibe una url válida para ser mostrada.
 *
 * Caso contrario, se mostrará una imagen placeholder.
 */
@Pipe({
  name: 'imgNews',
})
export class ImgNewsPipe implements PipeTransform {
  /** Ruta de la imagen placeholder. */
  defaultImage: string = '../../../../../assets/img/news-placeholder.webp';

  /**
   * Método transformador del pipe.
   * @param url La url de la imagen a verificar.
   * @returns Una promesa de tipo string.
   */
  async transform(url: string): Promise<string> {
    if (await this.verifyImage(url)) {
      return url;
    }
    return this.defaultImage;
  }

  /**
   * Verifica si la imagen contiene una URL válida (HTTP 200 OK).
   * @param url La URL de la imagen a ser verificada.
   * @returns Una promesa de tipo boolean.
   */
  async verifyImage(url: string | null | undefined): Promise<boolean> {
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
