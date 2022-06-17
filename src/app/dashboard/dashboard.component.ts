import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressbookService } from '../addressbook.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addressbookdata: any;

  constructor(private router:Router, private service:AddressbookService) { }

  ngOnInit(): void {
    this.getAllAddressBookData();
  }

  onAddUser(){
    this.router.navigate(["form"]);
  }

  getAllAddressBookData(){
    this.service.getAllAddressBookData().subscribe((data:any) => {
      this.addressbookdata = data.data;
    });
  }

  deleteAddresssBookById(id:number){
    this.service.deleteAddressBookById(id).subscribe((data)=>{
      this.ngOnInit();
      this.router.navigate(["dashboard"]);
    });
  }

  updateById(id:number){
    this.router.navigate(['update',id])
  }
}
