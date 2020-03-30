import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ToastUiImageEditorComponent } from 'ngx-tui-image-editor';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
})
export class ImageEditorComponent implements AfterViewInit {
  title = 'Image Editor';
  @ViewChild(ToastUiImageEditorComponent) editorComponent: ToastUiImageEditorComponent;

  ngAfterViewInit() {
    console.log(this.editorComponent.editorInstance);
  }
}