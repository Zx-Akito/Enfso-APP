import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-svg',
  templateUrl: './icon-svg.component.html',
  styleUrls: ['./icon-svg.component.scss']
})
export class IconSvgComponent implements OnInit {

  @Input() name: string = "";
	@Input() size: number = 24;
	@Input() color: string = "";
	@Input() costum_color: string = "";
	@Input() stroke: string = "";
	@Input() fillOpacity: number = 1;
	@Input() className: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
