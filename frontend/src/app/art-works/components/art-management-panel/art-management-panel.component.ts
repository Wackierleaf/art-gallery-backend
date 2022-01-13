import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddArtModalComponent} from "../add-art-modal/add-art-modal.component";

@Component({
  selector: 'app-art-management-panel',
  templateUrl: './art-management-panel.component.html',
  styleUrls: ['./art-management-panel.component.scss']
})
export class ArtManagementPanelComponent implements OnInit {

  constructor(
    public readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openArtModal() {
    const dialogRef = this.dialog.open(AddArtModalComponent, {
      width: window.innerWidth < 500 ? '100vw' : '50%',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: window.innerHeight < 800 && window.innerWidth < 500 ? '100%' : '60%',
    })
  }
}