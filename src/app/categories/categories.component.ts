import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { PageEvent } from '@angular/material/paginator';


export interface showData {
  id: number;
  value: string;

}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  mediaSub: Subscription;
  panelOpenState = false;
  products = [];
  showMenu: boolean;
  DrawerMode: string;

  Brands = [
    'anyware', 'clothing', 'houses', 'fashion', 'adicted', 'teilor',
    'anyware', 'clothing', 'houses', 'fashion', 'adicted', 'teilor',
    'anyware', 'clothing', 'houses', 'fashion', 'adicted', 'teilor',
    'anyware', 'clothing', 'houses', 'fashion', 'adicted', 'teilor',
    'anyware', 'clothing', 'houses', 'fashion', 'adicted', 'teilor',
    'anyware', 'clothing', 'houses', 'fashion', 'adicted', 'teilor',
    'anyware', 'clothing', 'houses', 'fashion', 'adicted', 'teilor'
  ];

  Colors = [
    'green', 'white', 'blue', 'red', 'balck', 'orange',
    'purple'
  ];

  Sizes = [
    'xs', 's', 'm', 'l', 'xl', 'xxl'
  ];
  // Filter Options
  price: string;
  size: string;
  brands: string[];
  color: string;
  rating: string;

  filterOptions = {
    price: [],
    size: '',
    brands: [],
    color: '',
    rating: '',
  };

  /// Testing for paination
  dommydata = { count: 50, data: [] };
  toShow: showData[];

  constructor(private catService: CategoriesService, private activatedRoute: ActivatedRoute, private mediaObserver: MediaObserver) {
    this.startPaging();
  }
  pageEvent: PageEvent;
  datasource: [];
  pageIndex: number;
  pageSize: number;
  length: number;


  startPaging(): void {
    for (let i = 0; i < this.dommydata.count; i++) {
      this.dommydata.data.push(
        {
          id: i + 1,
          value: 'item number ' + (i + 1)
        }
      );
    }
    this.checking();
  }


  checking(): void {
    this.pageIndex = 0;
    if (this.dommydata.data.length < 20) {
      this.pageSize = this.dommydata.data.length;
    }
    else {
      this.pageSize = 20;
    }
  }

  handleChange(e: any): any {
    console.log(e);
    const pageShown = e.pageIndex;
    const shown = e.pageSize;
    const pagination = pageShown * shown;
    this.toShow = this.dommydata.data.filter((month, idx) => idx > pagination);
    console.log(this.toShow);
  }

  /*
  /// Testing for pagination

*/

  sortAsc(): void {
    this.products.sort((a, b) => a - b);
    console.log(this.products);
  }

  sortDsc(): void {
    this.products.sort((a, b) => b - a);
    console.log(this.products);
  }

  filterPrice(): void {
    this.filterOptions.price = this.price[0].split(',');
    console.log(this.price);
    this.filter();
  }
  filterSize(): void {
    this.filterOptions.size = this.size;
    this.filter();
  }

  filterBrand(): void {
    this.filterOptions.brands = this.brands;
    console.log(this.brands);
    this.filter();
  }

  filterColor(): void {
    this.filterOptions.color = this.color;
    this.filter();
  }

  filterRating(): void {
    this.filterOptions.rating = this.rating;
    this.filter();
  }


  filter(): void {
    const filterOption = this.filterOptions;
    console.log(filterOption);
    this.catService.Fillter(filterOption).subscribe(res => {
      this.products = res;
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      const screenSize = result.mqAlias;
      if (screenSize === 'lg' || screenSize === 'md') {
        console.log('large screen');
        this.showMenu = true;
        this.DrawerMode = 'side';
      }
      else {
        console.log('smaller screen');
        this.showMenu = false;
        this.DrawerMode = 'push';
      }
    });
    this.activatedRoute.snapshot.paramMap.get(``);
  }

  ngAfterViewInit(): void {
    this.accordion.openAll();
  }

}
