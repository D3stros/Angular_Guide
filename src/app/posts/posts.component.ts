import { Component } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent {
  constructor(http: HttpClient) {}
}
