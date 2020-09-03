import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  courses ;

  loadCourses() {
    this.courses = [
      { id: 1, title: "Angular" },
      { id: 2, title: "Laravel" },
      { id: 3, title: "Symfony" },
      { id: 4, title: "Java EE" },
      { id: 5, title: "Kotlin" },
    ];
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
  removeCourse(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  editCourse(course) {
    course.title = 'UPDATED';
  }
}
