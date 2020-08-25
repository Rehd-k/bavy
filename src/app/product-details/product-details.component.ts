import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private matIconReg: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.getIcons();
   }

  getIcons(): void {
    this.matIconReg.addSvgIcon(
      `ig`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/ig.svg`)
    );
    this.matIconReg.addSvgIcon(
      `twitter`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/twitter.svg`)
    );
    this.matIconReg.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/facebook.svg`)
    );
  }
  ngOnInit(): void {
  }

}
