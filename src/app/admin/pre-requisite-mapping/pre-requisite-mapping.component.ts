import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtree";
@Component({
  selector: "pre-requisite-mapping",
  templateUrl: "./pre-requisite-mapping.component.html",
  styleUrls: ["./pre-requisite-mapping.component.scss"]
})
export class PrerequisiteMappingComponent {
  currentLessonSource: any[] = [
    {
      label: "Maths",
      expanded: true,
      items: [
        {
          label: "Algebra",
          expanded: true,
          items: [
            {
              label: "Basic Fundamentals",
              selected: true
            },
            {
              label: "Introduction",
              selected: true
            }
          ]
        },
        {
          label: "Trignometry",
          expanded: true,
          items: [
            {
              label: "Basics",
              selected: true
            },
            {
              label: "Sine and Cosine degree",
              selected: true
            }
          ]
        }
      ]
    }
  ];

  prerequisiteLessonSource: any[] = [
    {
      label: "Maths",
      expanded: true,
      items: [
        {
          label: "Algebra",
          expanded: true,
          items: [
            {
              label: "Introduction",
              selected: true
            }
          ]
        },
        {
          label: "Trignometry",
          expanded: true,
          items: [
            {
              label: "Introduction",
              selected: true
            }
          ]
        }
      ]
    }
  ];

  @ViewChild("myTree")
  myTree: jqxTreeComponent;

  constructor(private routes: Router) {}

  myTreeOnInitialized(): void {
    this.myTree.selectItem(document.getElementById("Introduction"));
    this.myTree.expandItem(document.getElementById("Introduction"));
    document.addEventListener("contextmenu", event => {
      event.preventDefault();
      this.myTree.selectItem(event.target);
      let scrollTop = window.scrollY;
      let scrollLeft = window.scrollX;
    });
  }
}
