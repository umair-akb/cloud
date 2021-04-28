import { Component, OnInit } from '@angular/core';
import { stubTrue } from 'lodash';
import { ExploreService, Service } from '../explore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public exp: ExploreService, private router: Router) {}

  search: string;
  services: Service[];
  results: Service[];
  timeout: any = null;
  loading = true;

  ngOnInit() {
    this.exp.search().then((ss) => {
      this.services = ss.filter((s) => s.readme);
      this.loading = false;
    });
  }

  onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      $this.router.navigate(['/search'], {
        queryParams: {
          q: $this.search,
        },
      });
    }, 1000);
  }

  private executeListing(value: string) {
    this.loading = true;
    this.searchResults();
  }

  searchResults() {
    this.exp.search(this.search).then((ss) => {
      this.services = ss.filter((s) => s.readme);
      this.loading = false;
    });
  }
}
