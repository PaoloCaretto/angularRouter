import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() id?: number;
  @Input() titolo?: string;
  @Input() testo?: string;
  @Input() immagine?: string;

  constructor(private router: Router) {}
  vaiAProdotto() {
    this.router.navigate(['products', this.id]);
  }
}
