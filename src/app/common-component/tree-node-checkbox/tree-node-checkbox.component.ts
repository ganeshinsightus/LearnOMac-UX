import { Component, Input, ViewChild } from "@angular/core";
import { jqxTreeComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtree";
@Component({
  selector: "tree-node-checkbox",
  templateUrl: "tree-node-checkbox.component.html",
  styleUrls: ["tree-node-checkbox.component.scss"]
})
export class TreeNodeCheckBoxComponent {
  @ViewChild("treeReference")
  treeReference: jqxTreeComponent;
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
     
    }
    this.counter++;
  }

}
