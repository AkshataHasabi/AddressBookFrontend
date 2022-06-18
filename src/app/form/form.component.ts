import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressbookService } from '../addressbook.service';
import { Addressbookdata } from '../addressbookdata';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  /**
   *Injected router to navigate from one component to another component
   *Injected ActivatedRoute to get access to information about route.here it take id as path variable
   *component loaded
   */
  constructor(private router:Router, private service:AddressbookService, private route:ActivatedRoute) { }

  //Getting id from routes snapshot using paramMap for doing update operation
  id: any = this.route.snapshot.paramMap.get("id");

  // Make parameterized constructor of addressbookdata which is our model
  addressbookdata: Addressbookdata=new Addressbookdata("","","","","","","","","")

  //whenever the component is initialized ngOnInit method is invoked first
  ngOnInit(): void {
    this.service.getAddressBookDataById(this.id).subscribe((data:any)=>{
      this.addressbookdata=data.data;
    })
  }

   /**
  *Calls addaddressbookData method in service which uses http post method to save addressbook data to the database
  *and also navigate the user from form view to dashboard view
  */
  onSubmit() {
    console.log(this.addressbookdata);
    this.service.addAddressbookdata(this.addressbookdata).subscribe((data)=> 
    {
      this.router.navigate(["dashboard"])
    })
  }

   /**
   * using router navigate user to DashboardComponent
   */
  onCancle(){
    this.router.navigate(["dashboard"]);
  }

  /**
   *Calls updateAddressBookData method in service which uses http updateAddressBookById method
   * to update addressbook data in database using Id, id required from routing the  path for that 
   * we used activated route which take id as a path variable
   */
  updateAddressBookData() {
    this.service.updateAddressBookById(this.addressbookdata, this.id).subscribe ((data:any) => {
      this.router.navigate(["dashboard"])
    });  
  }
}
