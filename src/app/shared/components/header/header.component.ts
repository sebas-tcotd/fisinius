import { HttpClient } from '@angular/common/http';
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

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isSidebarOpen: boolean = false;
  @Output() openSignEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() modalStatusEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() searchWordEmitter: EventEmitter<string> = new EventEmitter();
  @ViewChildren(RouterLinkActive, { read: ElementRef })
  elementsWithRouterLinkActive!: QueryList<ElementRef>;
  sectionsElements: any[] = [];
  isSomeSectionActive: boolean = false;
  isSearchOpen: boolean = false;
  @Input() isModalActive: boolean = false;

  constructor(private router: Router, private news: NewsService) {}

  toggleSidebar(): void {
    this.isSidebarOpen = true;
    this.openSignEmitter.emit(this.isSidebarOpen);
  }

  replaceItemsWithSearchInput(retain?: any): void {
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
  replaceSearchInputWithItems(): void {
    // Se remueve la clase 'hidden' a cada uno de los elementos
    this.sectionsElements.forEach((e) => e.classList.remove('hidden'));
  }
  toggleSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;

    if (this.isSearchOpen) {
      this.replaceItemsWithSearchInput();
    } else {
      this.replaceSearchInputWithItems();
    }
  }

  whoIsTheActive() {
    this.sectionsElements = this.elementsWithRouterLinkActive
      .toArray()
      .map((e) => e.nativeElement);

    const activeIndex = this.sectionsElements.find((e) =>
      e.classList.contains('border-b-2')
    );

    return activeIndex;
  }
  onRouterLinkActive(event: boolean): void {
    this.isSomeSectionActive = event;

    if (this.isSearchOpen && !this.isSomeSectionActive) {
      this.replaceItemsWithSearchInput();
    } else if (this.isSearchOpen && this.isSomeSectionActive) {
      const active = this.whoIsTheActive();
      active.classList.remove('hidden');
    }
  }

  onSearchInput(event: string) {
    if (event) {
      this.router.navigateByUrl('/search');
    }
    this.news.searchNews(event).subscribe();
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
    this.modalStatusEmitter.emit(this.isModalActive);
  }
  receiveModalStatus(event: boolean) {
    this.isModalActive = event;
    this.modalStatusEmitter.emit(this.isModalActive);
  }
}
