import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.type';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input() unitList: Location[] = [];
}
