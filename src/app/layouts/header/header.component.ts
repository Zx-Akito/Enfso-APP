import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string = "Dashboard"
  public subtitle: string = "Dashboard"

  constructor(private router:Router) { }

  ngOnInit(): void {
    
    this.router.events.subscribe(() => {
      switch (this.router.url) {
        case "/dashboard":
          this.title = "Dashboard"
          this.subtitle = "Hello Nila Vita, Welcome Back!"
          break;

        case "/bids":
          this.title = "Bids"
          this.subtitle = "Welcome Enfso Bids Page"
          break;
        
        case "/saved":
          this.title = "Saved Items"
          this.subtitle = "Welcome Enfso Saved Page"
          break;

        case "/creators":
          this.title = "Creators"
          this.subtitle = "Welcome Enfso Creators Page"
          break;
        
        case "/wallet":
          this.title = "Wallet"
          this.subtitle = "Welcome Enfso Wallet Page"
          break;
      
        default:
          break;
      }
    })
  }

}
