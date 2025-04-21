import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = 'Clique para saber mais';
  isActive: boolean = false;

  toggleContent(): void {
    this.isActive = !this.isActive;
  }
}
