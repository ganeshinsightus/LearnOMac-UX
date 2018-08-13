import { NgModule } from "@angular/core";
import { MatSidenavModule, MatDialogModule, MatDatepickerModule, MatToolbarModule, MatIconModule } from "@angular/material";

// A shared module which imports and exports all the Angular Material 
@NgModule({
    declarations: [],
    imports: [MatSidenavModule, MatDialogModule, MatToolbarModule, MatIconModule],
    exports: [MatSidenavModule, MatDialogModule, MatToolbarModule, MatIconModule]
})
export class NgMaterialModule {

}