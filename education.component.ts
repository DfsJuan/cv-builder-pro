import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() education: { degree: string; school: string; years: string }[] = [];
  @Output() educationChange = new EventEmitter<{ degree: string; school: string; years: string }[]>();

  addEducation() {
    this.education.push({ degree: '', school: '', years: '' });
    this.emitChange();
  }

  removeEducation(index: number) {
    this.education.splice(index, 1);
    this.emitChange();
  }

  emitChange() {
    this.educationChange.emit(this.education);
  }
}
