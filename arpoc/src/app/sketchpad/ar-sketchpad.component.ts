import { Component, ViewChild } from '@angular/core';
import { ViewerComponent, AR_EXPORTS, PdfExportService, HtmlExportService, XlsxExportService } from '@grapecity/activereports-angular';


@Component({
    selector: 'app-sketchpad',
    templateUrl: './ar-sketchpad.component.html',
  })
  export class ARSketchPadComponent {
    title = 'Sketchpad';
   
  }