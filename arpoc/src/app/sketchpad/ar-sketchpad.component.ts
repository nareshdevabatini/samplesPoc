import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ToastUiImageEditorComponent } from 'ngx-tui-image-editor';
import ImageEditor from "tui-image-editor";
import { Saveimage } from '../common/save-image';

@Component({
  selector: 'app-sketchpad',
  templateUrl: './ar-sketchpad.component.html',
  styleUrls: ['./ar-sketchpad.component.css']
})
export class ARSketchPadComponent implements AfterViewInit {
  title = 'Sketchpad';
  @ViewChild(ToastUiImageEditorComponent) editorComponent: ToastUiImageEditorComponent;
  ngAfterViewInit() {

    this.editorComponent.editorInstance = new ImageEditor(
      document.querySelector('#tui-image-editor'), {
      cssMaxWidth: 500,
      cssMaxHeight: 500,
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70
      },
      includeUI: {
        loadImage: {
          path: '../../assets/blank.JPG',
          name: 'Blank'
        },
        menuBarPosition: 'bottom'
      },
    });
  }

  public saveImage() {
    let image = this.editorComponent.editorInstance.toDataURL()
    image = image.replace(/^data:image\/\w+;base64,/, "");
    let d = new Saveimage();
    const filename = this.editorComponent.editorInstance.getImageName() + "1";
    d.download(image,filename);
  }
}

