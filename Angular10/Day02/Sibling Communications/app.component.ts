<h1> Application Development using Angular</h1>
<br>
<hr>

 <!-- <app-login></app-login>  -->
<!-- <app-friends></app-friends> -->
<!-- <app-login></app-login> -->
 <!-- <app-products></app-products>  -->
<!-- <app-binding-example></app-binding-example> -->
<!-- <app-dept-list></app-dept-list> -->
<!-- <app-products-category Productcategory ="Category 1"></app-products-category> -->

<app-filterlist (onhyperlinkclick)="sort($event)"></app-filterlist>
<br>
<br>
<app-employees [sortby]="sortingby"></app-employees>

<!-- <app-filterlist></app-filterlist>

<app-employees></app-employees> -->
