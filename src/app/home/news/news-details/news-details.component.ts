import { Component } from '@angular/core';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
 // styleUrls: ['./news-dialog.component.scss']
})
export class NewsDetailsComponent {


  constructor(){

  }
  columnDefs = [
    {headerName: 'No', field: 'no' },
    {headerName: 'News Title', field: 'title' },
    {headerName: 'News Detail', field: 'detail'}
];

rowData = [
    { no: '1', title: 'Celica', detail: 'Cras justo odioCras justo odioCras justo odioCras justo odio' },
    { no: '2', title: 'Mondeo', detail: 'odioCras justo odioCras justo odio sto odisto odisto odi' },
    { no: '3', title: 'Boxter', detail: 'dioCras justo odoioCras justo odioCras justo odiojusto ' }
];
}
