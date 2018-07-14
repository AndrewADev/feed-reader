import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private feedService: FeedService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.feedService.getArticle(id).subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }
}
