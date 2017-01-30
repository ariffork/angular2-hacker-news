import { Component, Input, OnInit } from '@angular/core';

import {Story} from "../models/story";
import {Settings} from "../models/settings";
import {SettingsService} from "../services/settings.service";


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Story;
  settings: Settings;

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.settings;
  }

  ngOnInit() {}

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
