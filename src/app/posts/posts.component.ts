import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { AppError } from '../common/appErro';
import { NotFoundError } from '../common/notFoundError';
import { BadInput } from '../common/bad-input';

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: Array<any>;
  post = { id: 0, title: "", body: "", userId: "" };
  status = true;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe(
      (response) => {
        (this.posts as object) = response;
      },
      (error) => {
        alert("erreur inattendue");
        console.log(error);
      }
    );
  }

  createPost() {
    this.postService.create(this.post).subscribe(
      (response) => {
        this.post.id = response['id'];
        this.posts.unshift(this.post);
        this.post = { id: 0, title: "", body: "", userId: "" };
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          alert("bad request");
        } else {
          alert("erreur inattendue");
          console.log(error);
        }
      }
    );
  }
  editPost(post) {
    this.post = post;
    this.status = false;
  }

  updatePost() {
    this.postService.update(this.post).subscribe(
      (response) => {
        this.post = { id: 0, title: "", body: "", userId: "" };
        this.status = true;
      },
      (error) => {
        alert("erreur inattendue");
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.postService.delete(post).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("ce post est déjà supprimé");
        } else {
          alert("erreur inattendue");
          console.log(error);
        }
      }
    );
  }
}
