import { Component, ViewChild, Input } from "@angular/core";
import { jqxTreeComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtree";

import { jqxPanelComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel";

@Component({
  selector: "tree-node",
  templateUrl: "tree-node.component.html",
  styleUrls: ["tree-node.component.scss"]
})
export class TreeNodeComponent {
  @ViewChild("treeReference")
  treeReference: jqxTreeComponent;
  @ViewChild("treePanel")
  treePanel: jqxPanelComponent;
  isReal: boolean = false;
  isSets: boolean = false;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.treeReference.selectItem(null);
    });
  }
  @Input()
  treeSource: any[] = [];

  counter: number = 0;
  myTreeOnSelect(event: any): void {
    let args = event.args;
    let item = this.treeReference.getItem(args.element);
    if (this.counter > 1) {
      debugger;
      if (item.label == "Real Numbers") {
        this.isReal = true;
        this.isSets = false;
      } else if (item.label == "Sets") {
        this.isReal = false;
        this.isSets = true;
      }
    }
    this.counter++;
  }
}
