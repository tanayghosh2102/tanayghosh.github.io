import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() selectedNameOut = new EventEmitter<string>();
  selectedLink = "home";

  manageFooterLinks(linkName) {
    this.selectedLink = linkName;
    this.selectedNameOut.emit(this.selectedLink);
  }

  constructor() { }

  ngOnInit() {
  }

}
