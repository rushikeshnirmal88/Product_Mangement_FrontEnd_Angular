import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{
  product=new Product();
  
  constructor(private route:Router,private service:NgserviceService,private activatedRouter:ActivatedRoute){}
  
  ngOnInit() {
  // let id= parseInt(this.activatedRouter.snapshot.paramMap.get('id'));
  // this.service.getProdcutByIdFromRemote(id).subscribe(
  //   data=>{
  //     console.log("data recived");
  //      this.product=data;
  //   },
  //   error=>console.log("error accurd")
    
  // )
  }


  gotolist()
  {
    console.log("go_back");
    this.route.navigate(['productlist']);
  }
}
