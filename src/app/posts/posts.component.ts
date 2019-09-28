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
    this.service.getAll().subscribe(posts => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";

    this.service.create(post).subscribe(newPost => {
      post["id"] = newPost.id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    this.service.update(post).subscribe(updatedPost => {
      console.log(updatedPost);
    });
  }

  deletePost(post) {
    this.service.delete(post.id).subscribe(() => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
