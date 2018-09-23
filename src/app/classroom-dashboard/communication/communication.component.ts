import { Component } from "@angular/core";
import { CommunicationReplyComponent } from "./communication-reply/communication-reply.component";
import { MatDialogRef, MatDialog } from "@angular/material";
import { CommunicationNewComponent } from "./communication-new/communication-new.component";
import { CommunicationRepliedComponent } from "./communication-replied/communication-replied.component";
import { CommunicationViewComponent } from "./communication-view/communication-view.component";
import { Router } from "@angular/router";

@Component({
  selector: "teacher-communication",
  templateUrl: "./communication.component.html",
  styleUrls: ["../classroom-dashboard.component.scss"]
})
export class CommunicationComponent {
  replyDialogRef: MatDialogRef<CommunicationReplyComponent>;
  repliedDialogRef: MatDialogRef<CommunicationRepliedComponent>;
  newDialogRef: MatDialogRef<CommunicationNewComponent>;
  viewDialogRef: MatDialogRef<CommunicationViewComponent>;
  showScroll:boolean;
  
  constructor(public dialog: MatDialog , private routes:Router) {}
  openReplyDialog() {
    this.replyDialogRef = this.dialog.open(CommunicationReplyComponent, {
      width: "50%",
      height: "cal(78vh)"
    });
    //this.messagesDialogRef.componentInstance.title = "odioCras justo odio";
    this.replyDialogRef.disableClose = true;
  }
  openSentDialog() {
    this.repliedDialogRef = this.dialog.open(CommunicationRepliedComponent, {
      width: "50%",
      height: "cal(52vh)"
    });
    //this.messagesDialogRef.componentInstance.title = "odioCras justo odio";
    this.repliedDialogRef.disableClose = true;
  }
  openNewDialog() {
    this.newDialogRef = this.dialog.open(CommunicationNewComponent, {
      width: "50%",
      height: "cal(87vh)"
    });
    //this.messagesDialogRef.componentInstance.title = "odioCras justo odio";
    this.newDialogRef.disableClose = true;
  }
  openViewDialog() {
    this.viewDialogRef = this.dialog.open(CommunicationViewComponent, {
      width: "50%",
      height: "cal(42vh)"
    });
    //this.messagesDialogRef.componentInstance.title = "odioCras justo odio";
    this.viewDialogRef.disableClose = true;
  }

  openCommunicationList(){
    this.routes.navigateByUrl('/communication-list');
  }

}
