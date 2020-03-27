import { Component, ViewChild } from '@angular/core';
import { ViewerComponent, AR_EXPORTS, PdfExportService, HtmlExportService, XlsxExportService } from '@grapecity/activereports-angular';


@Component({
    selector: 'app-sketchpad',
    templateUrl: './active-reports.component.html',

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
export class ActiveReportComponent {
    title = 'Active reports';
    @ViewChild('reportviewer', { static: false }) reportviewer: ViewerComponent;

    ngAfterViewInit() {
        this.reportviewer.init.subscribe(() => {
            this.reportviewer.open({
                "Name": "Report",
                "Type": "report",
                "Width": "9.7215in",
                "Body": {
                    "Name": "Body",
                    "Type": "section",
                    ReportItems: [
                        { Type: "textbox", Name: "textbox1", Value: "Hello from ActiveReports", Height: "10in" }
                    ]
                }
            });
        });
    }
}