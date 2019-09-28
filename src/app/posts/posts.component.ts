import { PostService } from "../services/post.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe(
      posts => (this.posts = posts),
      error => {
        alert("An unexpected error occured.");
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";

    this.service.create(post).subscribe(
      newPost => {
        post["id"] = newPost.id;
        this.posts.splice(0, 0, post);
      },
      error => {
        alert("An unexpected error occured.");
        console.log(error);
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe(
      updatedPost => {
        console.log(updatedPost);
      },
      error => {
        alert("An unexpected error occured.");
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.service.delete(post.id).subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) alert("This post has already been deleted.");
        console.log(error);
      }
    );
  }
}
