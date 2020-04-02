import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActiveReportsModule } from '@grapecity/activereports-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ActiveReportComponent } from './activereports/active-reports.component';
import { BloodReportComponent } from './activereports/blood-report/blood-report.component';
import { PlainReportComponent } from './activereports/plain-report/plain-report.component';
import { EmployeeReportComponent } from './activereports/employee-report/employee-report.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';
import { ToastUiImageEditorModule } from 'ngx-tui-image-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './material-module';
import { CustomizationReportComponent } from './activereports/customization-report/customization-report.component';
import { SketchModule } from './sketch/sketch.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveReportComponent,
    PlainReportComponent,
    BloodReportComponent,
    EmployeeReportComponent,
    ImageEditorComponent,
    CustomizationReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveReportsModule,
    ToastUiImageEditorModule,
    BrowserAnimationsModule,
    MaterialModules,
    SketchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
