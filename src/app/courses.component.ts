import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `
})
export class CoursesComponent {
  imageUrl = "";
  colSpan = 2;
}
