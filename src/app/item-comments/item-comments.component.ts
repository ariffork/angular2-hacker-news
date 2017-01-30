import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import {Story} from "../models/story";
import {Settings} from "../models/settings";
import {SettingsService} from "../services/settings.service";
import {HackerNewsAPIService} from "../services/hackernews-api.service";


@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  sub: Subscription;
  item: Story;
  errorMessage: string;
  settings: Settings;

  constructor(
    private hackerNewsAPIService: HackerNewsAPIService,
    private settingsService: SettingsService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.settings = this.settingsService.settings;
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this.hackerNewsAPIService.fetchItemContent(itemID).subscribe(item => {
        this.item = item;
      }, error => this.errorMessage = 'Could not load item comments.');
    });
  }

  goBack() {
    this.location.back();
  }

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
