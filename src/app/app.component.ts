import { Component, Renderer2, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  tema: 'claro' | 'escuro' = 'claro';

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const temaSalvo = localStorage.getItem('tema') as 'claro' | 'escuro';
    this.tema = temaSalvo || 'claro';
    this.atualizarClasseTema();
  }

  alternarTema(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.tema = checkbox.checked ? 'escuro' : 'claro';
    localStorage.setItem('tema', this.tema);
    this.atualizarClasseTema();
  }

  private atualizarClasseTema(): void {
    const body = document.body;
    this.renderer.removeClass(body, 'tema-escuro');
    this.renderer.removeClass(body, 'tema-claro');
    this.renderer.addClass(body, this.tema === 'escuro' ? 'tema-escuro' : 'tema-claro');
  }
}