
// modal.component.ts

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../dialogdata';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    debugger
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    debugger
    this.dialogRef.close();
  }

  onUpdateClick(): void {
    debugger
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
