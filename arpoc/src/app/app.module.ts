import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActiveReportsModule } from '@grapecity/activereports-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ARSketchPadComponent } from './sketchpad/ar-sketchpad.component';
import { ActiveReportComponent } from './activereports/active-reports.component';
import { BloodReportComponent } from './activereports/blood-report/blood-report.component';
import { PlainReportComponent } from './activereports/plain-report/plain-report.component';
import { EmployeeReportComponent } from './activereports/employee-report/employee-report.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';
import { ToastUiImageEditorModule } from 'ngx-tui-image-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    ARSketchPadComponent,
    ActiveReportComponent,
    PlainReportComponent,
    BloodReportComponent,
    EmployeeReportComponent,
    ImageEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveReportsModule,
    ToastUiImageEditorModule,
    BrowserAnimationsModule,
    MaterialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
