import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.componente.html',
  styleUrls: ['modal.componente.scss'],
  standalone: true,
})

export class ModalComponent {
  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }
}