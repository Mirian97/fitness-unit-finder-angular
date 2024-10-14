import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterUnitsService } from '../../services/filter-units.service';
import { FindUnitsService } from '../../services/find-units.service';
import { Location } from '../../types/location.type';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Output() clearEvent = new EventEmitter();
  formGroup!: FormGroup;
  results: Location[] = [];
  filteredResults: Location[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private unitService: FindUnitsService,
    private filterUnitsService: FilterUnitsService
  ) {}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data;
      this.filteredResults = data;
    });
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });
  }

  onSubmit() {
    const { hour, showClosed } = this.formGroup.value;
    this.filteredResults = this.filterUnitsService.filter(
      this.results,
      showClosed,
      hour
    );
    this.unitService.setFilteredUnits(this.filteredResults);
    this.submitEvent.emit();
  }

  onClean() {
    this.formGroup.reset();
    this.filteredResults = this.results;
    this.unitService.setFilteredUnits(this.results);
    this.clearEvent.emit();
  }
}
