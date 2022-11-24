import { Component, OnInit } from '@angular/core';
import ISku from 'src/app/interfaces/ISku';
import { SkuService } from 'src/app/service/sku.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  skus: ISku[] = []
  constructor(private service:SkuService) {

  }

  ngOnInit(): void {
    this.service.get().subscribe(
      data => {
        this.skus = data
        console.log(this.skus)
      }
    )
  }

}