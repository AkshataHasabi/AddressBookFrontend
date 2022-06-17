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
  
  constructor(private router:Router, private service:AddressbookService, private route:ActivatedRoute) { }

  id: any = this.route.snapshot.paramMap.get("id");

  addressbookdata: Addressbookdata=new Addressbookdata("","","","","","","","","")

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addressbookdata);
    this.service.addAddressbookdata(this.addressbookdata).subscribe((data)=> 
    {
      this.router.navigate(["dashboard"])
    })
  }
  onCancle(){
    this.router.navigate(["dashboard"]);
  }

  updateAddressBookData() {
    this.service.updateAddressBookById(this.addressbookdata, this.id).subscribe ((data:any) => {
      this.router.navigate(["dashboard"])
    });  
  }
}
