import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { this.matIconRegistry.addSvgIcon(
    `exit`,
    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/exit_to_app_black_24dp.svg")
  );


  }

  ngOnInit(): void {
  }

}
