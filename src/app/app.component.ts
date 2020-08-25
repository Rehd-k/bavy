import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  panelOpenState = false;

  mediaSub: Subscription;
  title = 'bavy';
  information: any[];
  automaticClose = true;
  constructor(
    private mediaObserver: MediaObserver,
    private matIconReg: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
    ) {
    this.getIcons();
    this.http.get('assets/categories.json').subscribe(res => {
      const CatItems = 'CatItems';
      this.information = res[CatItems];
    });
  }

  toggleSection(index: number): void {
    this.information[index].open = !this.information[index].open;
    if (this.automaticClose && this.information[index].open) {
      this.information
        .filter((item, itemIndex) => itemIndex !== index)
        .map(item => item.open = false);
    }
  }
  toggleItem(index: string | number, childindex: string | number): void {
    this.information[index].children[childindex].open = !this.information[index].children[childindex].open;
  }


  getIcons(): void {
    this.matIconReg.addSvgIcon(
      `fashion`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/shirt.svg`)
    );
    this.matIconReg.addSvgIcon(
      `beauty`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/treatment.svg`)
    );
    this.matIconReg.addSvgIcon(
      `men`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/man.svg`)
    );
    this.matIconReg.addSvgIcon(
      `women`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/woman.svg`)
    );
    this.matIconReg.addSvgIcon(
      `fashion`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/shirt.svg`)
    );

    this.matIconReg.addSvgIcon(
      `ig`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/ig.svg`)
    );
    this.matIconReg.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/linkedin.svg`)
    );
    this.matIconReg.addSvgIcon(
      `twitter`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/twitter.svg`)
    );
    this.matIconReg.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/facebook.svg`)
    );
    this.matIconReg.addSvgIcon(
      `ios`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/app-store.svg`)
    );
    this.matIconReg.addSvgIcon(
      `md`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/play-store.svg`)
    );
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
    });
  }


  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }


}
