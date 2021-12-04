import { Component, OnInit } from '@angular/core';
import { concat, map, Observable, tap } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchWord: string = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.searchKeyword$.subscribe((res) => {
      // TODO: Hacer la funcionalidad para mostrar los resultados de la búsqueda
      if (res.news) {
        alert(
          `Se encontraron ${res.news.length} noticias.\nEstamos en progreso de añadir esta funcionalidad, tennos paciencia por favor 🥺`
        );
      } else {
        alert(
          `No se encontraron noticias.\nEstamos en progreso de añadir esta funcionalidad, tennos paciencia por favor 🥺`
        );
      }
    });
  }
}
