import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import {User} from "../../models/user";
import {HackerNewsAPIService} from "../../services/hackernews-api.service";


@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnInit {

  sub: Subscription;
  user: User;
  errorMessage: string;

  constructor(
    private hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let userID = params['id'];
      this.hackerNewsAPIService.fetchUser(userID).subscribe(data => {
        this.user = data;
      }, error => this.errorMessage = 'Could not load user ' + userID + '.');
    });
  }

  goBack() {
    this.location.back();
  }
}
