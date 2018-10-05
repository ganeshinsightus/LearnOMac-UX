import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "manage-content",
  templateUrl: "./manage-content.component.html",
  styleUrls: ["./manage-content.component.scss"]
})
export class ManageContentComponent{
    showScroll1:boolean;
    showScroll2:boolean;
    showScroll3:boolean;
    showScroll4:boolean;  

    constructor(private routes : Router){

    }

    openVideoContent(){
        this.routes.navigateByUrl('/video-content');
    }
    openDocumentContent(){
        this.routes.navigateByUrl('/document-content');
    }
    openOtherResourcesContent(){
        this.routes.navigateByUrl('/otherresources-content');
    }
    openProjectContent(){
        this.routes.navigateByUrl('/project-content');
    }
}