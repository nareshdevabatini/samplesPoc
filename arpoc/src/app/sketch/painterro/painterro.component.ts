import { Component, OnInit } from '@angular/core';
declare var loadPainterro: any;

@Component({
    selector: 'app-painterro',
    templateUrl: './painterro.component.html',
    styleUrls: ['./painterro.component.css']
})
export class PainterroComponent implements OnInit {
    title = 'Painterro';
    public ngOnInit() {
        loadPainterro()
      }
}