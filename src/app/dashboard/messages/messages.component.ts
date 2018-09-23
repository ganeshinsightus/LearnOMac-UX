import { CommunicationRepliedComponent } from "../../classroom-dashboard/communication/communication-replied/communication-replied.component";
import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";
import { CommunicationReplyComponent } from "../../classroom-dashboard/communication/communication-reply/communication-reply.component";

@Component({
  selector: "home-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["../dashboard.component.scss"]
})
export class MessagesComponent {
  repliedDialogRef: MatDialogRef<CommunicationRepliedComponent>;
  viewDialogRef: MatDialogRef<CommunicationReplyComponent>;
  showScroll:boolean;
  constructor(public dialog: MatDialog ,public routes:Router) {}
  openSentDialog() {
    this.repliedDialogRef = this.dialog.open(CommunicationRepliedComponent, {
      width: "50%",
      height: "calc(52vh)"
    });
    this.repliedDialogRef.disableClose = true;
  }
  openViewDialog() {
    this.viewDialogRef = this.dialog.open(CommunicationReplyComponent, {
      width: "50%",
      height: "calc(78vh)"
    });
  }
  openMessageList(){
    this.routes.navigateByUrl('/dashboard/message-list');
  }
}
