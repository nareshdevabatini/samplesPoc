import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-sketchpad',
    templateUrl: './active-reports.component.html',
})
export class ActiveReportComponent {
    constructor(protected router: Router, ) { }
    public clickPlainReport() {
      this.router.navigate(['plain-report']);
    }
    public clickBloodReport() {
      this.router.navigate(['blood-report']);
    }
    public clickEmployeeReport() {
        this.router.navigate(['employee-report']);
      }
}
