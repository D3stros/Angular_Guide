import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
import { SummaryPipe } from "./summary.pipe";

@Component({
  selector: "courses",
  template: `
    {{ text | summary: 10 }}
  `
})
export class CoursesComponent {
  text =
    "lorem  ipsum sadaaaaaaaaaaaaaaaaaaaadkamdksamdkasmdlkasmdkasmdmaskmdsamdmaskdmamdksadalsmdkasmdlamsdkamdsalksdm";
}
