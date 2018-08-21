import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class FilterService {
    private showClassroomFilter:boolean;
    private showStudentProfileFilter:boolean;
    private showStudentPerformanceFilter:boolean;
    private classroomPath:string = "";
    
    get isShowFilter(){
       return this.showClassroomFilter = true;
    }

    get isClassroomPath(){
        return this.classroomPath = "/classroom";
    }

    get isStudentProfilePath(){
        return this.classroomPath = "/student/profile";
    }

    get isStudentPerformancePath(){
        return this.classroomPath = "/student/performance";
    }

    get isStudentCommunicationPath(){
        return this.classroomPath = "/student/communication";
    }
}
