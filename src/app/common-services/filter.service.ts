import { Injectable } from "@angular/core";
@Injectable()
export class FilterService {
    private activateFilter:boolean;
    private filterPath:string = "";
    
    get isShowFilter(){
       return this.activateFilter = true;
    }

    get isClassroomDashboardPath(){
        return this.filterPath = "/class-dashboard";
    }

    get isClassroomPerformancePath(){
        return this.filterPath = "/class-performance";
    }

    get isClassroomPerformanceDetailedViewPath(){
        return this.filterPath = "/class-performance/detailed-view";
    }

    get isStudentProfilePath(){
        return this.filterPath = "/student/profile";
    }

    get isStudentPerformancePath(){
        return this.filterPath = "/student/performance";
    }

    get isStudentCommunicationPath(){
        return this.filterPath = "/student/parent-communication";
    }

    get isLessonPlanPath(){
        return this.filterPath = "/lesson/plans";
    }
    
    get isLessonTrackingPath(){
        return this.filterPath = "/lesson/tracking";
    }

    get isAssessmentPath(){
        return this.filterPath = "/lesson/assessments";
    }

    get isAttendancePath(){
        return this.filterPath = "/attendance";
    }

    get isCurriculumContent(){
        return this.filterPath = "/content-library";
    }

    get isManageSubjects(){
        return this.filterPath = "/manage-subjects";
    }

    get isManageContent(){
        return this.filterPath = "/manage-contents";
    }

    
    get isManageVideoContent(){
        return this.filterPath = "/video-content";
    }

    
    get isManageDocumentContent(){
        return this.filterPath = "/document-content";
    }

    
    get isManageOtherResourcesContent(){
        return this.filterPath = "/otherresources-content";
    }

    
    get isManageProjectContent(){
        return this.filterPath = "/project-content";
    }
}
