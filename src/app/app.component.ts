// Author: T4professor

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from './dialogdata';
import { ModalComponent } from './modal/modal.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular 6';
  animal: string
  myname: string

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  rowData = []

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '340px',
      height: '480px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

ngOnInit(): void {
  this.http.get('https://yiyj0fg5tg.execute-api.us-east-1.amazonaws.com/dev/addresses').subscribe(data => {
      this.setRow(data)
    });
}

  columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone', field: 'phone' },    
    { headerName: 'Id', field: 'id' },
    {
      headerName: '',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClickEdit.bind(this),
        label: 'Edit'
      }
    },
    
  ];

  setRow(data) {
    this.rowData = data.result.Items
  }

  onBtnClickEdit(e) {
    this.openDialog(e.rowData)
  }
  
  onBtnClickOpen(e) {
    this.openDialog({isNew:true})
  }
}
