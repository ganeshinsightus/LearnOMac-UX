import { CommunicationRepliedComponent } from "../../classroom/communication/communication-replied/communication-replied.component";
import { CommunicationViewComponent } from "../../classroom/communication/communication-view/communication-view.component";
import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "home-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["../home.component.scss"]
})
export class MessagesComponent {
  repliedDialogRef: MatDialogRef<CommunicationRepliedComponent>;
  viewDialogRef: MatDialogRef<CommunicationViewComponent>;

  constructor(public dialog: MatDialog ,public routes:Router) {}
  openRepliedDialog() {
    this.repliedDialogRef = this.dialog.open(CommunicationRepliedComponent, {
      width: "50%",
      height: "52vh"
    });
    this.repliedDialogRef.disableClose = true;
  }
  openViewDialog() {
    this.viewDialogRef = this.dialog.open(CommunicationViewComponent, {
      width: "50%",
      height: "42vh"
    });
  }
  openMessageList(){
    this.routes.navigateByUrl('/message-list');
  }
}
