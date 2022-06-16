import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addressbookdata } from '../addressbookdata';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }
  addressbookdata:Addressbookdata=new Addressbookdata("","","","","","","","","")

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addressbookdata);
  }
  onCancle(){
    this.router.navigate(["dashboard"]);
  }
}
