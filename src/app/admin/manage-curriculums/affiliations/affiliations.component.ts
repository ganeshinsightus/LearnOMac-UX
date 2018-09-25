import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { jqxTreeGridComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid";
import { jqxDropDownListComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist";
import { jqxListBoxComponent } from "jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox";

@Component({
  selector: "affiliations",
  templateUrl: "./affiliations.component.html",
  styleUrls: ["./affiliations.component.scss"]
})
export class AffiliationsComponent {
  constructor(private routes: Router) {}

  @ViewChild("myTreeGrid")
  myTreeGrid: jqxTreeGridComponent;
  @ViewChild("myDropDownList")
  myDropDownList: jqxDropDownListComponent;
  @ViewChild("myListBox")
  myListBox: jqxListBoxComponent;
  handleCheckChange: boolean = true;

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return "90%";
    }

    return 850;
  }
  listSource: any[] = [{ label: "Curriculum Name", value: "CurriculumName" }];
  data: any[] = [
    {
      CurriculumID: 1,
      CurriculumName: "CBSE",
      SchoolName: "Chaitanya School",
      Country: "India",
      State: "Telangana",
      City: "Gachibowli",
      SchoolOrganization: "-"
    },
    {
      CurriculumID: 2,
      CurriculumName: "CBSE",
      SchoolName: "Chaitanya School",
      Country: "India",
      State: "Telangana",
      City: "Lingampally",
      SchoolOrganization: "-"
    },
    {
      CurriculumID: 3,
      CurriculumName: "Stateboard",
      SchoolName: "Queen Mira International School",
      Country: "India",
      State: "Tamilnadu",
      City: "Madurai",
      SchoolOrganization: "-"
    },
    {
      CurriculumID: 4,
      CurriculumName: "Stateboard",
      SchoolName: "Velammal International School",
      Country: "India",
      State: "Tamilnadu",
      City: "Madurai",
      SchoolOrganization: "-"
    },
  ];
  source: any = {
    dataType: "json",
    dataFields: [
      { name: "CurriculumID", type: "number" },
      { name: "CurriculumName", type: "string" },
      { name: "SchoolName", type: "string" },
      { name: "Country", type: "string" },
      { name: "State", type: "string" },
      { name: "City", type: "string" },
      { name: "SchoolOrganization", type: "string" }
    ],
    id: "CurriculumID",
    localData: this.data
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns = [
    { text: "Curriculum Name" , dataField:"CurriculumName" ,width: 150},
    { text: "School Name", dataField: "SchoolName", width: 150 },
    { text: "Country", dataField: "Country", width: 150 },
    { text: "State", dataField: "State", width: 150 },
    { text: "Town / City", dataField: "City", width: 150 },
    { text: "School Organization", dataField: "SchoolOrganization", width: 150 }
  ];
  ready = (): void => {
    this.myTreeGrid.expandRow(2);
    this.updatemyListBox("CurriculumName");
  };
  updatemyListBox(dataField: string): void {
    this.myTreeGrid.clearFilters();
    let myListBoxAdapter = new jqx.dataAdapter(this.source, {
      uniqueDataFields: [dataField],
      async: false,
      autoBind: true
    });
    let uniqueRecords = myListBoxAdapter.records;
    uniqueRecords.splice(0, 0);
    this.myListBox.setOptions({
      source: uniqueRecords,
      displayMember: dataField
    });
    this.myListBox.checkAll();
  }
  applyFilter(dataField: string): void {
    this.myTreeGrid.clearFilters();
    let filtertype = "stringfilter";
    // create a new group of filters.
    let filtergroup = new jqx.filter();
    // get listbox's checked items.
    let checkedItems = this.myListBox.getCheckedItems();
    if (checkedItems.length == 0) {
      let filter_or_operator = 1;
      let filtervalue = "Empty";
      let filtercondition = "equal";
      let filter = filtergroup.createfilter(
        filtertype,
        filtervalue,
        filtercondition
      );
      filtergroup.addfilter(filter_or_operator, filter);
    } else {
      for (let i = 0; i < checkedItems.length; i++) {
        let filter_or_operator = 1;
        // set filter's value.
        let filtervalue = checkedItems[i].label;
        // set filter's condition.
        let filtercondition = "equal";
        // create new filter.
        let filter = filtergroup.createfilter(
          filtertype,
          filtervalue,
          filtercondition
        );
        // add the filter to the filter group.
        filtergroup.addfilter(filter_or_operator, filter);
      }
    }
    // add the filters.
    this.myTreeGrid.addFilter(dataField, filtergroup);
    // apply the filters.
    this.myTreeGrid.applyFilters();
  }
  myListBoxOnCheckChange(event: any): void {
    if (!this.handleCheckChange) return;
    if (event.args.label != "(Select All)") {
      // update the state of the "Select All" listbox item.
      this.handleCheckChange = false;
      this.myListBox.checkIndex(0);
      let checkedItems = this.myListBox.getCheckedItems();
      let items = this.myListBox.getItems();
      if (checkedItems.length == 1) {
        this.myListBox.uncheckIndex(0);
      } else if (items.length != checkedItems.length) {
        this.myListBox.indeterminateIndex(0);
      }
      this.handleCheckChange = true;
    } else {
      // check/uncheck all items if "Select All" is clicked.
      this.handleCheckChange = false;
      if (event.args.checked) {
        this.myListBox.checkAll();
      } else {
        this.myListBox.uncheckAll();
      }
      this.handleCheckChange = true;
    }
  }
  myDropDownListOnSelect(event: any): void {
    this.updatemyListBox(event.args.item.value);
  }
  applyBtnOnClick(): void {
    let dataField = this.myDropDownList.getSelectedItem().value;
    this.applyFilter(dataField);
  }
  clearBtnOnClick(): void {
    this.myTreeGrid.clearFilters();
  }
  onBack() {
    this.routes.navigateByUrl("/manage-curriculums");
  }
}
