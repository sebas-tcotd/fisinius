import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';

/**
 * Componente que muestra el header de la aplicación.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  /** Atributo que está al tanto del estado de muestra del sidebar (solo en móviles). */
  @Input() isSidebarOpen: boolean = false;

  /** Atributo que detecta si el panel de accesibilidad está activo. */
  @Input() isModalActive: boolean = false;

  /** Atributo que emite una señal de apertura. */
  @Output() openSignEmitter: EventEmitter<boolean> = new EventEmitter();

  /** Atributo que emite el estado del panel de accesibilidad. */
  @Output() modalStatusEmitter: EventEmitter<boolean> = new EventEmitter();

  /** Atributo que emite la palabra de búsqueda de una noticia. */
  @Output() searchWordEmitter: EventEmitter<string> = new EventEmitter();

  /** Arreglo que contiene todos los elementos que tengan como atributo 'routerLinkActive'. */
  @ViewChildren(RouterLinkActive, { read: ElementRef })
  elementsWithRouterLinkActive!: QueryList<ElementRef>;

  /** Arreglo que contendrá los elementos HTML de las secciones que no estén activamente seleccionadas. */
  sectionsElements: any[] = [];

  /** Atributo que detecta si una sección está activa. */
  isSomeSectionActive: boolean = false;

  /** Atributo que detecta si el panel de búsqueda está abierto. */
  isSearchOpen: boolean = false;

  constructor(private router: Router, private news: NewsService) {}

  /**
   * Alterna el estado del sidebar y manda la señal hacia el componente padre.
   */
  toggleSidebar(): void {
    this.isSidebarOpen = true;
    this.openSignEmitter.emit(this.isSidebarOpen);
  }

  /**
   * Reemplaza aquellos ítems que no estén activamente seleccionados con el panel de búsqueda.
   */
  replaceItemsWithSearchInput(): void {
    // Agarra todos los elementos que contengan la directiva routerLinkActive
    // y los junta en un array
    this.sectionsElements = this.elementsWithRouterLinkActive
      .toArray()
      .map((e) => e.nativeElement);

    // Se consigue el index del elemento el cual contiene el routerLinkActive
    // activado, detectándolo por la clase que utiliza en ese estado
    const activeIndex = this.sectionsElements.findIndex((e) =>
      e.classList.contains('border-b-2')
    );

    if (activeIndex >= 0) {
      // Se elimina ese elemento del array
      this.sectionsElements.splice(activeIndex, 1);
    }

    // A los elementos restantes se les agrega la clase 'hidden'
    this.sectionsElements.forEach((e) => e.classList.add('hidden'));
  }

  /** Reemplaza el panel de búsqueda con los elementos que, en un principio, fueron reemplazados. */
  replaceSearchInputWithItems(): void {
    // Se remueve la clase 'hidden' a cada uno de los elementos
    this.sectionsElements.forEach((e) => e.classList.remove('hidden'));
  }

  /**
   * Alterna el estado del panel de búsqueda.
   */
  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;

    if (this.isSearchOpen) {
      this.replaceItemsWithSearchInput();
    } else {
      this.replaceSearchInputWithItems();
    }
  }

  /**
   * Determina cuál de los elementos que están como secciones está activamente seleccionado.
   * @returns El índice de la sección que está activamente seleccionada.
   */
  whoIsTheActive(): any {
    this.sectionsElements = this.elementsWithRouterLinkActive
      .toArray()
      .map((e) => e.nativeElement);

    const activeIndex = this.sectionsElements.find((e) =>
      e.classList.contains('border-b-2')
    );

    return activeIndex;
  }

  /**
   * Método que maneja el estado cuando se selecciona algún elemento del header que tenga 'routerLinkActive'.
   * @param event Los datos que se recibe cuando el evento es activado.
   */
  onRouterLinkActive(event: boolean): void {
    this.isSomeSectionActive = event;

    if (this.isSearchOpen && !this.isSomeSectionActive) {
      this.replaceItemsWithSearchInput();
    } else if (this.isSearchOpen && this.isSomeSectionActive) {
      const active = this.whoIsTheActive();
      active.classList.remove('hidden');
    }
  }

  /**
   * Método que maneja el estado cuando se solicita una búsqueda de una noticia en base a una palabra clave.
   * @param event Los datos del evento
   */
  onSearchInput(event: string): void {
    if (event) {
      this.router.navigateByUrl('/search');
    }
    this.news.searchNews(event).subscribe();
  }

  /**
   * Alterna el estado del panel de accesibilidad.
   */
  toggleModal(): void {
    this.isModalActive = !this.isModalActive;
    this.modalStatusEmitter.emit(this.isModalActive);
  }

  /**
   * Recibe el estado del panel de accesibilidad.
   * @param event El estado del panel.
   */
  receiveModalStatus(event: boolean): void {
    this.isModalActive = event;
    this.modalStatusEmitter.emit(this.isModalActive);
  }
}
