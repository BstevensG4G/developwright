import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-coming-soon-popup',
  standalone: true,
  templateUrl: './coming-soon-popup.component.html',
  styleUrls: ['./coming-soon-popup.component.css'],
})
export class ComingSoonPopupComponent {
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
