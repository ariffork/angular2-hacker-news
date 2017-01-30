import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {User} from "../models/user";
import {Story} from "../models/story";
import {PollResult} from "../models/poll-result";

@Injectable()
export class HackerNewsAPIService {

  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = "https://node-hnapi.herokuapp.com";
  }

  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
      .map(response => response.json());
  }

  fetchItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
      .map(response => response.json());
  }

  fetchComment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}`)
      .map(response => response.json());
  }

  fetchUser(id: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/user/${id}`)
      .map(response => response.json());
  }

  fetchPollContent(id: number): Observable<PollResult> {
    return this.http.get(`${this.baseUrl}/item/${id}`).map(response => response.json());
  }

  fetchItemContent(id: number): Observable<Story> {
    return this.http.get(`${this.baseUrl}/item/${id}`).map( response => response.json()
      // if (story.type === 'poll') {
      //   let numberOfPollOptions = story.poll.length;
      //   story.poll_votes_count = 0;
      //   for (let i = 1; i <= numberOfPollOptions; i++) {
      //     this.fetchPollContent(story.id + i).subscribe(pollResults => {
      //       story.poll[i - 1] = pollResults;
      //       story.poll_votes_count += pollResults.points;
      //     });
      //   }
      // }
      // return story;
    );
  }

}
