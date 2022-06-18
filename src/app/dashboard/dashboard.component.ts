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

  //injected dependencies which is required to render view properly 
  constructor(private router:Router, private service:AddressbookService) { }

   //whenever the component is initialized ngOnInit method is invoked first
  ngOnInit(): void {
    this.getAllAddressBookData();
  }

  //when an onAddUser function is called, it will naviagte to the form view
  onAddUser(){
    this.router.navigate(["form"]);
  }

  /**
   * crate method name as getalladdressbookdata and call method getalladdressbookdata from service to get addressbook details,
   *  after that do subscribe to store that data.
   */
  getAllAddressBookData(){
    this.service.getAllAddressBookData().subscribe((data:any) => {
      this.addressbookdata = data.data;
    });
  }

  //call deleteAddresssBookById method of service to delete address book details of that particular id
  deleteAddresssBookById(id:number){
    this.service.deleteAddressBookById(id).subscribe((data)=>{
      this.ngOnInit();
      this.router.navigate(["dashboard"]);
    });
  }

   //navigates page to update which has form component to load existing addressbook record for updation
  updateById(id:number){
    this.router.navigate(['update',id])
  }
}
