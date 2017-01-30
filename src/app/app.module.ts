import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StoriesComponent } from './components/stories/stories.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemComponent } from './components/item/item.component';
import {HackerNewsAPIService} from "./services/hackernews-api.service";
import {MomentModule} from "angular2-moment/index";
import { DomainPipe } from './pipes/domain.pipe';
import { ItemCommentsComponent } from './components/item-comments/item-comments.component';
import {routing} from "./app.routes";
import { CommentTreeComponent } from './components/comment-tree/comment-tree.component';
import { CommentComponent } from './components/comment/comment.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SettingsComponent } from './components/settings/settings.component';
import {SettingsService} from "./services/settings.service";
import { UserComponent } from './components/user/user.component';
import { CommentPipe } from './pipes/comment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainPipe,
    ItemCommentsComponent,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent,
    LoaderComponent,
    ErrorMessageComponent,
    SettingsComponent,
    UserComponent,
    CommentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    routing
  ],
  providers: [HackerNewsAPIService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
