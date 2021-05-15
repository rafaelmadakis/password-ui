import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-grid-pesquisa',
  templateUrl: './grid-pesquisa.component.html',
  styleUrls: ['./grid-pesquisa.component.css']
})
export class GridPesquisaComponent implements AfterViewInit{
  displayedColumns: string[] = ['ID', 'Sistema', 'Password'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor() { }

}

export interface PeriodicElement {
  Sistema: string;
  ID: number;
  Password: number;
  // Acoes: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Sistema: 'Hydrogen', Password: 1 },
  // {ID: 2, Sistema: 'Helium', Password: 4.0026},
  // {ID: 3, Sistema: 'Lithium', Password: 6.941},
  // {ID: 4, Sistema: 'Beryllium', Password: 9.0122},
  // {ID: 5, Sistema: 'Boron', Password: 10.811},
  // {ID: 6, Sistema: 'Carbon', Password: 12.0107},
  // {ID: 7, Sistema: 'Nitrogen', Password: 14.0067},
  // {ID: 8, Sistema: 'Oxygen', Password: 15.9994},
  // {ID: 9, Sistema: 'Fluorine', Password: 18.9984},
  // {ID: 10, Sistema: 'Neon', Password: 20.1797},
  // {ID: 11, Sistema: 'Sodium', Password: 22.9897},
  // {ID: 12, Sistema: 'Magnesium', Password: 24.305},
  // {ID: 13, Sistema: 'Aluminum', Password: 26.9815},
  // {ID: 14, Sistema: 'Silicon', Password: 28.0855},
  // {ID: 15, Sistema: 'Phosphorus', Password: 30.9738},
  // {ID: 16, Sistema: 'Sulfur', Password: 32.065},
  // {ID: 17, Sistema: 'Chlorine', Password: 35.453},
  // {ID: 18, Sistema: 'Argon', Password: 39.948},
  // {ID: 19, Sistema: 'Potassium', Password: 39.0983},
  // {ID: 20, Sistema: 'Calcium', Password: 40.078},
];
