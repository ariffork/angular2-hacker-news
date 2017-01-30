import { Component, OnInit } from '@angular/core';

import {Settings} from "../models/settings";
import {SettingsService} from "../services/settings.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  settings: Settings;

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.settings;
  }

  ngOnInit() {
  }

  toggleSettings(): void {
    this.settingsService.toggleSettings();
  }

  scrollTop(): void {
    window.scrollTo(0, 0);
  }
}
