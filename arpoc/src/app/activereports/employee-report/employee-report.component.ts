import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ViewerComponent, AR_EXPORTS, PdfExportService, HtmlExportService, XlsxExportService } from '@grapecity/activereports-angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-report',
    templateUrl: './employee-report.component.html',
    providers: [
        {
          provide: AR_EXPORTS,
          useClass: PdfExportService,
          multi: true
        },
        {
          provide: AR_EXPORTS,
          useClass: HtmlExportService,
          multi: true
        },
          {
          provide: AR_EXPORTS,
          useClass: XlsxExportService,
          multi: true
        }
      ]
})
export class EmployeeReportComponent implements AfterViewInit {
    @ViewChild('reportviewer', { static: false }) reportviewer: ViewerComponent;

    constructor(protected router: Router, ) { }
    ngAfterViewInit() {
    this.reportviewer.init.subscribe(() => {
        this.reportviewer.open('assets/active-reports/EmployeesList.rdlx-json');
    });
    }

    public close() {
        this.router.navigate(['']);
    }
}
