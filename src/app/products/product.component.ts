import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/api/products/product.service';


@Component ({
    selector: 'pm-products',
    templateUrl: './product.component.html'
})
export class ProductListComponent{
    pageTitle: string = "Acme Product Management";
    imageWidth: number = 50;
    imageMargin: number = 5;
    showImage: boolean = true;
   

    products: IProduct[] = [];



      filteredProducts: IProduct[];
      constructor(private productService: ProductService){
        
       // this.products = productService.getProducts();

      }

      toggleImage(): void {
          this.showImage= !this.showImage;
      }


      ngOnInit(): void{
        this.productService.getProducts().subscribe(prodObserved => {
            this.products = prodObserved;
            this.filteredProducts = this.products;
        });
        this.filteredProducts = this.products;
      }

      
      _listFilter: string = "Filter me";

      get listFilter(): string{
          return this._listFilter;
      }

      set listFilter(value: string){
          this._listFilter = value;
          this.filteredProducts = value ? this.performFilter(value) : this.products;
          console.log(this.filteredProducts);
      }
      performFilter(filterBy: string): IProduct[]
      {
          filterBy = filterBy.toLowerCase();
          //console.log(this.products.filter(( product => product.productName.toLowerCase().indexOf(filterBy) !== -1 )));
          return this.products.filter(( product => product.productName.toLowerCase().indexOf(filterBy) !== -1 ));
      } 

      gotClicked(message: string):void{
        this.pageTitle = message;
      }

}