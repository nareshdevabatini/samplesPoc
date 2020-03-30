import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ARSketchPadComponent } from './sketchpad/ar-sketchpad.component';
import { ActiveReportComponent } from './activereports/active-reports.component';
import { PlainReportComponent } from './activereports/plain-report/plain-report.component';
import { BloodReportComponent } from './activereports/blood-report/blood-report.component';
import { EmployeeReportComponent } from './activereports/employee-report/employee-report.component';
import { ImageEditorComponent } from './image-editor/image-editor.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'activereports', component: ActiveReportComponent },
  { path: 'sketchpad', component: ARSketchPadComponent },
  { path: 'image-editor', component: ImageEditorComponent},
  { path: 'plain-report',  component: PlainReportComponent},
  { path: 'blood-report',  component: BloodReportComponent},
  { path: 'employee-report', component: EmployeeReportComponent},
  { path: '**', component: ActiveReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
