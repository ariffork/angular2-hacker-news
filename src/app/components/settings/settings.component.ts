import { Component, OnInit } from '@angular/core';

import {Settings} from "../../models/settings";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.settings;
  }

  ngOnInit() {
  }

  closeSettings() {
    this.settingsService.toggleSettings();
  }

  toggleOpenLinksInNewTab() {
    this.settingsService.toggleOpenLinksInNewTab();
  }

  selectTheme(theme) {
    this.settingsService.setTheme(theme);
  }
}
