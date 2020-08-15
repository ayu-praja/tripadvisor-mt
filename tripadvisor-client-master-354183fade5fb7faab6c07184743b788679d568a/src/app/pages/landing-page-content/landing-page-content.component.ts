import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-content',
  templateUrl: './landing-page-content.component.html',
  styleUrls: ['./landing-page-content.component.scss']
})
export class LandingPageContentComponent implements OnInit {

  constructor() { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  ngOnInit() {
  }

}
