import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: "1.1-1" }} <br />
    {{ course.price | currency: "AUD" }} <br />
    {{ course.releaseDate | date: "shortDate" }}
  `
})
export class CoursesComponent {
  course = {
    title: "The complete angular course",
    rating: 4.0756,
    students: 10500,
    price: 199.95,
    releaseDate: new Date(2018, 3, 10)
  };
}
