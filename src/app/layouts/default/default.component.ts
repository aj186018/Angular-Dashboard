import { Component, OnInit, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  @Output() closeSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  onClose()
  {
    this.closeSidenav.emit();
  }

}
