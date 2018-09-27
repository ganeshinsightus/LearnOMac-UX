import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

export interface Field {
  value: string;
  viewValue: string;
}
@Component({
  selector: "curriculum-new",
  templateUrl: "./curriculum-new.component.html",
  styleUrls: ["./curriculum-new.component.scss"]
})

export class CurriculumNewComponent {
  students = new FormControl();
  selected:boolean;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  states: Field[] = [
    {value:"tamilnadu" , viewValue: "Tamilnadu"},
    {value:"telangana" , viewValue: "Telangana"},
    {value:"andrapradesh" , viewValue: "Andra Pradesh"},
    {value:"kerela" , viewValue: "Kerela"},
  ];

  countries: Field[] = [
    {value:"india" , viewValue: "India"},
    {value:"malaysia" , viewValue: "Malaysia"},
    {value:"usa" , viewValue: "United states of america"},
    {value:"africa" , viewValue: "South Africa"},
  ];

  grades1: Field[] = [
    {value:"1" , viewValue: "1"},
    {value:"2" , viewValue: "2"},
    {value:"3" , viewValue: "3"},
    {value:"4" , viewValue: "4"},
    {value:"5" , viewValue: "5"},
    {value:"6" , viewValue: "6"},
  ];

  grades2: Field[] = [
    {value:"6" , viewValue: "6"},
    {value:"7" , viewValue: "7"},
    {value:"8" , viewValue: "8"},
    {value:"9" , viewValue: "9"},
    {value:"10" , viewValue: "10"},
  ];


  constructor (private routes:Router ){}

  onBack(){
    this.routes.navigateByUrl('/manage-curriculums');
  }
}
