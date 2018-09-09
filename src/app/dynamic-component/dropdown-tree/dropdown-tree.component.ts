import { Component, Input, ViewChild } from "@angular/core";
import { jqxTreeComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtree";
import { jqxDropDownButtonComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton";
@Component({
  selector: "dropdown-tree",
  templateUrl: "dropdown-tree.component.html",
  styleUrls: ["dropdown-tree.component.scss"]
})
export class DropdownBoxComponent {
  @ViewChild("treeReference")
  treeReference: jqxTreeComponent;
  @ViewChild('myDropDownButton') myDropDownButton: jqxDropDownButtonComponent;
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.treeReference.selectItem(null);
    });
  }
  @Input() treeSource: any[] = [];
  @Input() checkBox: boolean;
  @Input() threeStates:boolean;
  
  counter: number = 0;
  myTreeOnSelect(event: any): void {
    let args = event.args;
    let item = this.treeReference.getItem(args.element);
    if (this.counter > 1) {
     this.myDropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">' + item.label + ' </div>')
    }
    this.counter++;
  }

  myTreeOnInitialized(): void {
      this.myDropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Select Lessons</div>');
  }
}
