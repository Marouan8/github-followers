import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    { id: 1, name: "email" },
    { id: 2, name: "telephone" },
    { id: 3, name: "SMS" },
  ];
  constructor() {}

  ngOnInit(): void {}
  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f.value);
  }
}
