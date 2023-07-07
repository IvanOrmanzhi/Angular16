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
    {
      headerName: '#',
      colId: 'rowNum',
      valueGetter: 'node.id',
      width: 80,
      pinned: 'left',
    },
    { field: 'athlete', width: 150, pinned: 'left' },
    { field: 'age', width: 90, pinned: 'left' },
    { field: 'country', width: 150 },
    { field: 'year', width: 90 },
    { field: 'date', width: 110 },
    { field: 'sport', width: 150 },
    { field: 'gold', width: 100 },
    { field: 'silver', width: 100 },
    { field: 'bronze', width: 100 },
    { field: 'total', width: 100, pinned: 'right' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    minWidth: 100,
    sortable: true,
    filter: false,
    resizable: true
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
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
