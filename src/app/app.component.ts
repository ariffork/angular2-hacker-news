import {Component, ViewEncapsulation} from '@angular/core';
import {Settings} from "./models/settings";
import {SettingsService} from "./services/settings.service";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  settings: Settings;
  theme: string;

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.settings;
  }

}
