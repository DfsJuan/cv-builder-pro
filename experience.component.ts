import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() experiences: { job: string; company: string; years: string }[] = [];
  @Output() experiencesChange = new EventEmitter<{ job: string; company: string; years: string }[]>();

  addExperience() {
    this.experiences.push({ job: '', company: '', years: '' });
    this.emitChange();
  }

  removeExperience(index: number) {
    this.experiences.splice(index, 1);
    this.emitChange();
  }

  emitChange() {
    this.experiencesChange.emit(this.experiences);
  }
}
