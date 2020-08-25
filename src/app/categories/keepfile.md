 <div class="row">
        <div class="col-md-3 d-none d-md-block">
            <div class="sidenav">
                <button mat-button (click)="accordion.openAll()"></button>
                <mat-accordion multi>
                    <mat-expansion-panel>
                        <mat-expansion-panel-header>
                            <mat-panel-title>
                                Price
                            </mat-panel-title>
                        </mat-expansion-panel-header>

                        <mat-selection-list [multiple]="false" [(ngModel)]="price" (ngModelChange)="filterPrice()">
                            <mat-list-option value="0,50000"> Below 5,000

                            </mat-list-option>

                            <mat-list-option value="5000,10000"> 5,000 - 10,000

                            </mat-list-option>

                            <mat-list-option value="10000,20000"> 10,000 - 20,000

                            </mat-list-option>

                            <mat-list-option value="20000,30000"> 20,000 - 30,000

                            </mat-list-option>

                            <mat-list-option value="30000,40000"> 30,000 - 40,000

                            </mat-list-option>

                            <mat-list-option value="40000,100000"> above - 40,000

                            </mat-list-option>
                        </mat-selection-list>

                    </mat-expansion-panel>

                    <mat-expansion-panel>
                        <mat-expansion-panel-header>
                            <mat-panel-title>
                                Size
                            </mat-panel-title>
                        </mat-expansion-panel-header>
                        <mat-selection-list [multiple]="false" [(ngModel)]="size" (ngModelChange)="filterSize()">
                            <mat-list-option *ngFor="let size of Sizes" [value]="size">
                                {{size}}
                            </mat-list-option>
                        </mat-selection-list>
                    </mat-expansion-panel>

                    <mat-expansion-panel>
                        <mat-expansion-panel-header>
                            <mat-panel-title>
                                Color
                            </mat-panel-title>
                        </mat-expansion-panel-header>
                        <mat-selection-list [multiple]="false" [(ngModel)]="color" (ngModelChange)="filterColor()">
                            <mat-list-option *ngFor="let color of Colors" [value]="color">
                                {{color}}
                            </mat-list-option>
                        </mat-selection-list>
                    </mat-expansion-panel>

                    <mat-expansion-panel>
                        <mat-expansion-panel-header>
                            <mat-panel-title>
                                Rating
                            </mat-panel-title>
                        </mat-expansion-panel-header>

                        <mat-selection-list [multiple]="false" [(ngModel)]="rating" (ngModelChange)="filterRating()">
                            <mat-list-option value="5">5</mat-list-option>
                            <mat-list-option value="4">4</mat-list-option>
                            <mat-list-option value="3">3</mat-list-option>
                            <mat-list-option value="2">2</mat-list-option>
                            <mat-list-option value="1">1</mat-list-option>
                        </mat-selection-list>
                    </mat-expansion-panel>

                    <mat-expansion-panel>
                        <mat-expansion-panel-header>
                            <mat-panel-title>
                                Brand
                            </mat-panel-title>
                        </mat-expansion-panel-header>
                        <div class="brands-cell">
                            <mat-selection-list role="listbox" [(ngModel)]="brands" (ngModelChange)="filterBrand()"
                                name="Select Brands">
                                <mat-list-option role="option" *ngFor="let item of Brands" [value]="item">{{item}}
                                </mat-list-option>
                            </mat-selection-list>
                        </div>

                    </mat-expansion-panel>


                </mat-accordion>
            </div>
        </div>
        <div class="col-md-9 col-sm-12">
            <div class="grid mt-2">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-6 mt-4">
                        <mat-card>
                            <span [routerLink]="['/product/']">
                                <mat-card-header>
                                    <img mat-card-image class="p-image">
                                </mat-card-header>
                                <mat-card-content>
                                    <div class="creator">Title Of product his is is is is is is is isi s</div>
                                    <div>Price </div>
                                    <div> Removed Price</div>
                                    <div class="rating">
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <!-- name="star{{ product.rating < 1 ?'': '-outline' }}"  -->
                                    </div>
                                </mat-card-content>
                            </span>
                            <mat-card-subtitle>
                                <div class="creator a">Made by
                                    <a routerLink="#">Seller name is is isi sii si sisi siisis</a>
                                </div>
                            </mat-card-subtitle>

                        </mat-card>
                    </div>

                    <div class="col-lg-3 col-md-4 col-6 mt-4">
                        <mat-card>
                            <span [routerLink]="['/product/']">
                                <mat-card-header>
                                    <img mat-card-image class="p-image">
                                </mat-card-header>
                                <mat-card-content>
                                    <div class="creator">Title Of product his is is is is is is is isi s</div>
                                    <div>Price </div>
                                    <div> Removed Price</div>
                                    <div class="rating">
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <!-- name="star{{ product.rating < 1 ?'': '-outline' }}"  -->
                                    </div>
                                </mat-card-content>
                            </span>
                            <mat-card-subtitle>
                                <div class="creator a">Made by
                                    <a routerLink="#">Seller name is is isi sii si sisi siisis</a>
                                </div>
                            </mat-card-subtitle>

                        </mat-card>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6 mt-4">
                        <mat-card>
                            <span [routerLink]="['/product/']">
                                <mat-card-header>
                                    <img mat-card-image class="p-image">
                                </mat-card-header>
                                <mat-card-content>
                                    <div class="creator">Title Of product his is is is is is is is isi s</div>
                                    <div>Price </div>
                                    <div> Removed Price</div>
                                    <div class="rating">
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <!-- name="star{{ product.rating < 1 ?'': '-outline' }}"  -->
                                    </div>
                                </mat-card-content>
                            </span>
                            <mat-card-subtitle>
                                <div class="creator a">Made by
                                    <a routerLink="#">Seller name is is isi sii si sisi siisis</a>
                                </div>
                            </mat-card-subtitle>

                        </mat-card>
                    </div>

                    <div class="col-lg-3 col-md-4 col-6 mt-4">
                        <mat-card>
                            <span [routerLink]="['/product/']">
                                <mat-card-header>
                                    <img mat-card-image class="p-image">
                                </mat-card-header>
                                <mat-card-content>
                                    <div class="creator">Title Of product his is is is is is is is isi s</div>
                                    <div>Price </div>
                                    <div> Removed Price</div>
                                    <div class="rating">
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <mat-icon>star</mat-icon>
                                        <!-- name="star{{ product.rating < 1 ?'': '-outline' }}"  -->
                                    </div>
                                </mat-card-content>
                            </span>
                            <mat-card-subtitle>
                                <div class="creator a">Made by
                                    <a routerLink="#">Seller name is is isi sii si sisi siisis</a>
                                </div>
                            </mat-card-subtitle>
                        </mat-card>
                    </div>
                </div>
            </div>
        </div>
    </div>