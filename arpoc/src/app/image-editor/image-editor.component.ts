import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ToastUiImageEditorComponent } from 'ngx-tui-image-editor';
import ImageEditor from "tui-image-editor";
import { Saveimage } from '../common/save-image';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
})
export class ImageEditorComponent implements AfterViewInit, OnInit {
  title = 'Image Editor';
  @ViewChild(ToastUiImageEditorComponent) editorComponent: ToastUiImageEditorComponent;

  public ngOnInit() {
    // this.editorComponent.options.includeUI = {
    //   loadImage: {
    //     path: '../../assests/bodyimage.jpg',
    //     name: 'SampleImage',
    //   }
    // }
    // this.editorComponent = {
    //   includeUI: true,
    //   options: {
    //     includeUI: {
    //       loadImage: {
    //         path: 'img/sampleImage.jpg',
    //         name: 'SampleImage',
    //       }
    //     },
    //     cssMaxWidth: 700,
    //     cssMaxHeight: 500,
    //     selectionStyle: {
    //       cornerSize: 20,
    //       rotatingPointOffset: 70
    //     }
    //   },
    //   addText: null,
    //   mousedown: null,
    //   objectActivated: null,
    //   objectMoved: null,
    //   objectScaled: null,
    // }

  }
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
          path: '../../assets/cau_male_head_anterior.jpg',
          name: 'Blank'
        },
        menuBarPosition: 'bottom'
      },
    });
   
  }
  public loadImage(type: string) {
    switch (type) {
      case "male_head":
        this.editorComponent.editorInstance.loadImageFromURL('../../assets/cau_male_head_anterior.jpg', 'bodyimage').then(t => {
          console.log(t);
        });
        break;
      case "back_full_male_body":
        this.editorComponent.editorInstance.loadImageFromURL('../../assets/cau_male_fullbody_posterior.jpg', 'bodyimage').then(t => {
          console.log(t);
        });
        break;
      case "front_full_male_body":
        this.editorComponent.editorInstance.loadImageFromURL('../../assets/bodyimage.jpg', 'bodyimage').then(t => {
          console.log(t);
        });
        break;
      case "woman_body":
        this.editorComponent.editorInstance.loadImageFromURL('../../assets/womanNew.gif', 'bodyimage').then(t => {
          console.log(t);
        });
        break;
      default:
        this.editorComponent.editorInstance.loadImageFromURL('../../assets/blank.JPG', 'bodyimage').then(t => {
          console.log(t);
        });

    }

  }

  public saveImage() {
    let image = this.editorComponent.editorInstance.toDataURL()
    image = image.replace(/^data:image\/\w+;base64,/, "");
    let d = new Saveimage();
    const filename = this.editorComponent.editorInstance.getImageName() + "1";
    d.download(image,filename);
  }
}