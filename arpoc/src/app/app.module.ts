import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActiveReportsModule} from '@grapecity/activereports-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ARSketchPadComponent } from './sketchpad/ar-sketchpad.component';
import { ActiveReportComponent } from './activereports/active-reports.component';
import { BloodReportComponent } from './activereports/blood-report/blood-report.component';
import { PlainReportComponent } from './activereports/plain-report/plain-report.component';

@NgModule({
  declarations: [
    AppComponent,
    ARSketchPadComponent,
    ActiveReportComponent,
    PlainReportComponent,
    BloodReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveReportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
