import { Component, OnInit } from '@angular/core';
import {HackernewsApiService} from "../services/hackernews-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  typeSub: any;
  pageSub: any;
  items:any;
  storiesType;
  pageNum: number;
  listStart: number;

  constructor(
    private hackerNewAPIService: HackernewsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.typeSub = this.route
      .data
      .subscribe(data => {
        this.storiesType = (data as any).storiesType;
      });

    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;
      this.hackerNewAPIService.fetchStories(this.storiesType, this.pageNum)
        .subscribe(
          response => this.items = response,
          error => console.log('Error fetching ' + this.storiesType + ' stories'),
          () => {
            this.listStart = ((this.pageNum - 1) * 30) + 1
            window.scrollTo(0, 0);
          }
        );
    });

    // Tidak update variabelnya, tidak reload data juga, seakan komponen tidak berubah
    // this.storiesType = this.route.snapshot.data['storiesType'];
    // this.pageNum = +this.route.snapshot.params['page'] ? +this.route.snapshot.params['page'] : 1;
    // this.hackerNewAPIService.fetchStories(this.storiesType, this.pageNum)
    //   .subscribe(
    //     response => {
    //       this.items = response;
    //       console.log("reponse");
    //     },
    //     error => console.log('Error fetching ' + this.storiesType + ' stories'),
    //     () => {
    //       this.listStart = ((this.pageNum - 1) * 30) + 1;
    //       window.scrollTo(0, 0);
    //       console.log("listStart = " + this.pageNum);
    //     }
    //   );
  }

}
