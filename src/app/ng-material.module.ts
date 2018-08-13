import {
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule
    } from '@angular/material';
import { NgModule } from '@angular/core';

// A shared module which imports and exports all the Angular Material 
@NgModule({
    declarations: [],
    imports: [
        MatSidenavModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatNativeDateModule,
        MatDatepickerModule
    ],
    exports: [
        MatSidenavModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatNativeDateModule,
        MatDatepickerModule
    ]
})
export class NgMaterialModule {

}