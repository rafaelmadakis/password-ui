import { MatIconRegistry } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "exit",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/exit_to_app_black_24dp.svg")
    )};

  ngOnInit(): void {
  }

}
