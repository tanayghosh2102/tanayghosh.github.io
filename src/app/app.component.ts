import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLinkName:string;
  manageViewObj:ManageView = {
    home: true,
    experience: false,
    about: false,
    extra: false,
  };
  
  getFooterLinkNameFromEvent($event) {
    this.selectedLinkName = $event;
    for(let link in this.manageViewObj) {
      if($event === link) {
        this.manageViewObj[link] = true;
      } else {
        this.manageViewObj[link] = false;
      }
    }
  }
}

export interface ManageView {
  home:boolean;
  experience:boolean;
  about:boolean;
  extra:boolean;
}