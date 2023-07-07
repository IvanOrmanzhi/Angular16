import {Component, ViewChild} from '@angular/core';
import {async, Observable} from "rxjs";
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {AgGridAngular, AgGridModule} from "ag-grid-angular";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  selector: 'app-test-aggrid',
  templateUrl: './test-aggrid.component.html',
  styleUrls: ['./test-aggrid.component.scss'],
  standalone: true,
  imports: [AgGridModule, NgFor, AsyncPipe, HttpClientModule],
})
export class TestAGGridComponent {

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  protected readonly async = async;
}
