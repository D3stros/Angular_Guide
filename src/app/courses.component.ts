import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <input
      [value]="email"
      (keyup.enter)="email = $event.target.value; onKeyUp()"
    />
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})
export class CoursesComponent {
  email = "testmail";

  onKeyUp() {
    console.log(this.email);
  }
}
