import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ARSketchPadComponent } from './sketchpad/ar-sketchpad.component';
import { AppComponent } from './app.component';
import { ActiveReportComponent } from './activereports/active-reports.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'activereports', component: ActiveReportComponent },
  { path: 'sketchpad', component: ARSketchPadComponent },
  { path: '**', component: ActiveReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
