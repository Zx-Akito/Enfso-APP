import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 public color:string = "#6F4FF2"
  constructor() { }

  ngOnInit(): void {
    
  }



}
