import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

import { FeedService } from '../feed.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  articles: Article[];

  constructor(private feedService: FeedService) {
    this.feedService.getArticles().subscribe( articles => this.articles = articles);
   }

  ngOnInit() {
  }

}
