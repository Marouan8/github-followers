import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-follower',
  templateUrl: './profil-follower.component.html',
  styleUrls: ['./profil-follower.component.scss']
})
export class ProfilFollowerComponent implements OnInit {
  id: number;
  username: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
         this.id = +params.get('id');
         this.username = params.get('username')
      }
    )
    this.route.queryParamMap.subscribe(
      queryParams => {
        console.log(queryParams)
      }
    )
  }


}
