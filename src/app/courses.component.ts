import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <button
      [style.backgroundColor]="isActive ? 'blue' : 'white'"
      class="btn btn-primary"
      [class.active]="isActive"
    >
      Save
    </button>
  `
})
export class CoursesComponent {
  isActive = true;
}
