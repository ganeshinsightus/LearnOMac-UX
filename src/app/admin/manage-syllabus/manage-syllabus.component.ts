import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog, MatOption } from "@angular/material";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { jqxTreeComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtree";
import { jqxMenuComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu";
@Component({
  selector: "manage-syllabus",
  templateUrl: "./manage-syllabus.component.html",
  styleUrls: ["./manage-syllabus.component.scss"]
})
export class ManageSyllabusComponent {
  isLinear = false;

  firstFormGroup: FormGroup;

  secondFormGroup: FormGroup;

  thirdFormGroup: FormGroup;

  fourthFormGroup: FormGroup;

  step = 0;

  showAdd: boolean = false;

  showEdit: boolean = false;

  updatedItem: string;

  addedItem: string;

  item: string;

  isAssignees: boolean = false;

  @ViewChild("myTree")
  myTree: jqxTreeComponent;
  @ViewChild("myMenu")
  myMenu: jqxMenuComponent;

  template1Source: any[] = [
    {
      label: "Category",
      expanded: true,
      items: [
        {
          label: "Unit",
          expanded: true,
          items: [
            {
              label: "Lesson",
              selected: true
            }
          ]
        }
      ]
    }
  ];

  template2Source: any[] = [
    {
      label: "Unit",
      expanded: true,
      items: [{ label: "Syllabus", selected: true }]
    }
  ];

  template3Source: any[] = [
    {
      label: "Syllabus"
    }
  ];

  
  template4Source: any[] = [
    {
      label: "Volume 1",
      expanded: true,
      items: [
        {
          label: "Unit 1",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 2",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 3",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 4",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        }
      ]
    },
    {
      label: "Volume 2",
      items: [
        {
          label: "Unit 1",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 2",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 3",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 4",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        }
      ]
    },
    {
      label: "Volume 3",
       items: [
        {
          label: "Unit 1",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 2",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 3",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 4",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        }
      ]
    },
    {
      label: "Volume 3",
      items: [
        {
          label: "Unit 1",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 2",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 3",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        },
        {
          label: "Unit 4",
          expanded: true,
          items: [
            {
              label: "Lesson 1",
              selected: true
            },
            {
              label: "Lesson 2",
              selected: true
            },
            {
              label: "Lesson 3",
              selected: true
            },
            {
              label: "Lesson 4",
              selected: true
            }, {
              label: "Lesson 5",
              selected: true
            }
          ]
        }
      ]
    }
  ];
  constructor(
    private dialog: MatDialog,
    private routes: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ["", Validators.required]
      grade: new FormControl(),
      subject: new FormControl(),
      curriculum: new FormControl()
    });
    this.secondFormGroup = this._formBuilder.group({
      //secondCtrl: ["", Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      student: new FormControl(["", Validators.required])
    });
    this.fourthFormGroup = this._formBuilder.group({
      // student: new FormControl(["", Validators.required])
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  myTreeOnInitialized(): void {
    this.myTree.selectItem(document.getElementById("Introduction"));
    this.myTree.expandItem(document.getElementById("Introduction"));
    document.addEventListener("contextmenu", event => {
      event.preventDefault();

      this.myTree.selectItem(event.target);
      let scrollTop = window.scrollY;
      let scrollLeft = window.scrollX;
      this.myMenu.open(
        event.clientX + 5 + scrollLeft,
        event.clientY + 5 + scrollTop
      );
    });
  }

  myMenuOnItemClick(event: any): void {
    let item = event.args.innerText;
    let selectedItem = null;

    switch (item) {
      case "Add Item":
        selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
          let newItem = "Add item";
          this.addItem(newItem);
        }
        break;
      case "Add Sub Item":
        selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
          let newItem = "Add Sub item";
          this.addItem(newItem);
        }
        break;
      case "Edit Item":
        selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
          let newItem = selectedItem.label;
          this.upDateItem(newItem);
          this.myTree.render();
        }
        break;
      case "Remove Item":
        selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
          this.myTree.removeItem(selectedItem.element);
        }
        break;
    }
  }

  addItem(newItem: string) {
    this.showEdit = false;
    this.showAdd = true;
    this.addedItem = newItem;
  }

  upDateItem(newItem: string) {
    this.showEdit = true;
    this.showAdd = false;
    this.updatedItem = newItem;
  }

  saveItem(event: any, newItem: string) {
    if (this.addedItem === "Add item") {
      let selectedItem = this.myTree.getSelectedItem();
      if (selectedItem != null) {
        this.addedItem = newItem;
        this.myTree.addAfter({ label: this.addedItem }, selectedItem.element);
      }
    } else {
      let selectedItem = this.myTree.getSelectedItem();
      if (selectedItem != null) {
        this.addedItem = newItem;
        this.myTree.addTo({ label: this.addedItem }, selectedItem.element);
      }
    }
    this.showAdd = false;
  }

  updateItem(event: any, newItem: string) {
    let selectedItem = this.myTree.getSelectedItem();
    if (selectedItem != null) {
      this.updatedItem = newItem;
      this.myTree.updateItem({ label: this.updatedItem }, selectedItem.element);
    }
    this.showEdit = false;
  }
}
