import { Component, ViewChild } from "@angular/core";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";
import { Router } from "@angular/router";

@Component({
  selector: "project-content",
  templateUrl: "./project-content.component.html",
  styleUrls: ["./project-content.component.scss"]
})
export class ProjectContentComponent {
  showFileUpload: boolean;
  showWebURL: boolean;
  resourceTypevalue: string;

  constructor(private routes: Router) {}

  onResourceType(event: any) {
    this.resourceTypevalue = event.target.value;
    if (this.resourceTypevalue === "1") {
      this.showFileUpload = true;
      this.showWebURL = false;
    } else {
      this.showFileUpload = false;
      this.showWebURL = true;
    }
  }

  onViewDetails() {
    this.routes.navigateByUrl("/manage-project-content");
  }

  onBack() {
    this.routes.navigateByUrl("/manage-contents");
  }
}
