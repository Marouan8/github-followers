import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers:any[];
  constructor(private githubFollowersService: GithubFollowersService) { }

  ngOnInit(): void {
    this.githubFollowersService.getAll().subscribe(
      followers => {
        (this.followers as object) = followers;
      }
    )
  }

}
