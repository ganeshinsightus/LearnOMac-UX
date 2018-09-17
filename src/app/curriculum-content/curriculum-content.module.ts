import { NgMaterialModule } from '../ng-material.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurriculumContentComponent } from './curriculum-content.component';

@NgModule({
    declarations: [
     CurriculumContentComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgMaterialModule,
    ],
    exports: [],
    entryComponents: [
        
    ],
})
export class CurriculumContentModule {

}