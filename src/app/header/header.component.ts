import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router:Router) { }

  //when a component get initialized the ngOnInit function is called first
  ngOnInit(): void {
  }

  // this function navigate the user from header to DashboardComponent 
  onDashboard(){
    this.router.navigate(["dashboard"]);
  }

}
