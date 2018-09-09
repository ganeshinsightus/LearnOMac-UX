import { Component, ViewChild, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";

export interface PeriodicElement {
    name: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {name: 'Ajith'},
    {name: 'Vijay'},
    {name: 'Arya'},
    {name: 'Surya'},
    {name: 'Ganesh'},
    {name: 'Kapoor'},
    {name: 'Arjit'},
  ];
  

@Component({
  templateUrl: "./source-dialog.component.html",
  styleUrls: ["./source-dialog.component.scss"]
})
export class SourceDialogComponent {
  isLinear = false;

  @Input() video:boolean;
  @Input() document:boolean;
  @Input() project:boolean;
  @Input() other:boolean;
  @Input() assignees:boolean;

  
  @Input() videos:boolean;
  @Input() documents:boolean;
  @Input() projects:boolean;
  @Input() others:boolean;
  @Input() viewAssignees:boolean;
  
  checkBox: boolean = true;

  threeStates: boolean = true;

  videoSource: any[] = [
    {
      label: "3 Videos",
      expanded: true,
      checkboxes: true,
      items: [
        {
          label: "Probability - Basics",
          selected: true
        },
        {
          label: "Probability - Real Life Video",
          selected: true
        },
        {
          label: "Probability - Brief Introduction",
          selected: true
        }
      ]
    }
  ];

  documentSource: any[] = [
    {
      label: "2 Document",
      checkboxes: true,
      expanded:true,
      items: [
        {
          label: "Probability Explanation pdf",
          selected: true
        },
        {
          label: "Probability Advance Concepts pdf",
          selected: true
        }
      ]
    }
  ];

  projectSource: any[] = [
    {
      label: "2 Activities",
      checkboxes: true,
      expanded:true,
      items: [
        {
          label: "Probability Problems",
          selected: true
        },
        {
          label: "Probability Advance Problems",
          selected: true
        }
      ]
    }
  ];

  otherSource: any[] = [
    {
      label: "2 Other Sources",
      checkboxes: true,
      expanded:true,
      items: [
        {
          label: "Logical games which related to Probability",
          selected: true
        },
        {
          label: "Mind Quiz - Probability",
          selected: true
        }
      ]
    }
  ];

  source: string[] =
  [
      'Affogato',
      'Americano',
      'Bicerin',
      'Breve',
      'Café Bombón',
      'Café au lait'
  ];

  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;

  constructor(public dialogref: MatDialogRef<SourceDialogComponent>) {}
  closeDialog() {
    this.dialogref.close();
  }
}
