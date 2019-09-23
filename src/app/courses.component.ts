import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <input (keyup.enter)="onKeyUp($event)" />
  `
})
export class CoursesComponent {
  onKeyUp($event) {
    console.log($event.target.value);
  }
}
