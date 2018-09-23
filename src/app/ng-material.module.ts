import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './common-component/doughnut-chart/doughnut-chart.component';
import { DoughnutChartLevel5Component } from './common-component/doughnut-chart-level5/doughnut-chart-level5.component';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
  } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StackedBarChartComponent } from './common-component/stacked-bar-chart/stacked-bar-chart';
import { StackedBarChartlevel4Component } from './common-component/stacked-bar-chart-level4/stacked-bar-chart-level4';
import { StackedBarChartlevel5Component } from './common-component/stacked-bar-chart-level5/stacked-bar-chart-level5';
@NgModule({
  declarations: [
    DoughnutChartComponent,
    DoughnutChartLevel5Component,
    StackedBarChartComponent,
    StackedBarChartlevel4Component,
    StackedBarChartlevel5Component
  ],
  imports: [
    AgGridModule.withComponents([]),
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatChipsModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTabsModule,
    ChartsModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule
  ],
  exports: [
    AgGridModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatChipsModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule,
    MatProgressBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTabsModule,
    ChartsModule,
    DoughnutChartComponent,
    DoughnutChartLevel5Component,
    StackedBarChartComponent,
    StackedBarChartlevel4Component,
    StackedBarChartlevel5Component
  ]
})
export class NgMaterialModule {}
