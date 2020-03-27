import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ARSketchPadComponent } from './sketchpad/ar-sketchpad.component';
import { ActiveReportComponent } from './activereports/active-reports.component';
import { PlainReportComponent } from './activereports/plain-report/plain-report.component';
import { BloodReportComponent } from './activereports/blood-report/blood-report.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'activereports', component: ActiveReportComponent },
  { path: 'sketchpad', component: ARSketchPadComponent },
  { path: 'plain-report',  component: PlainReportComponent},
  { path: 'blood-report',  component: BloodReportComponent},
  { path: '**', component: ActiveReportComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
