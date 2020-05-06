import { Component, AfterViewInit, ViewChild, Input, ElementRef } from '@angular/core';
import { PhotoEditorSDKUI, Tool, CanvasAction } from 'photoeditorsdk';
import React from 'react';
import * as ReactDom from "react-dom";
// import * from ''
const license = '{"api_token":"X2aVSGPDnJ5YBLqox1WDJQ","app_identifiers":["localhost"],"available_actions":[],"domains":["https://api.photoeditorsdk.com"],"enterprise_license":false,"expires_at":1588809600,"features":["camera","library","export","customassets","whitelabel","focus","textdesign","transform","brush","text","frame","overlay","sticker","adjustment","filter"],"issued_at":1586332164,"minimum_sdk_version":"1.0","owner":"Naresh D","platform":"HTML5","products":["pesdk"],"version":"2.4","signature":"XbytTucLCOjd5m+2YsmSvqIyDmPVQKSYrvd75sq/FhD8L0ztxxsaFmebc0ay7UDg1EP8K3g2DfOgfm3Fsg4xkuSVT4i96Q+breTxgsAVqojXxji3BDYHhFLZnrP8NarfcKyA0BtozJsgGF9sUSevqhi5JCqQIPZkBo92VMzhi/m3LTU/jGcQln8wcz3I+wOuvQMWb2Vq30vJblA9pRQd2ukImjESul9P9pN7b8eestx6y0DM+1NdB7bKQ0Gh9YWDEZlnPtop4XMZT/OglDoy4BvNDpv8JoOoUgLlQH5gZ3uHF8iUoYpk9ZC2AXj8HxWTtGONTm+DpYTQTJDlsFGERKYoE0rzfz/CnbiFPQnQ/f7vZJ5odllPZ17jiKd6/+cYyCd+eymoDb1bqBY4QM43Tvh0KgH0YGJfw8nypgg0mMZE0i2lfYMFkfZkPQYlz5z0coNeUuGYY39mvsjf9PCUb2T7NKwkQz9thAvANKW9A51xRtLk8GiuSy0592DaCi5YbBQHXmLPzfoJwDA3cfE375uvEMe9BMoSpcN42oFXPhNp2MxoY/30cu+sdAxA7Yu+CJuL10M1BuYzIUt56jyhRGQKLoLI0sRDSx7tz+9F9oI0gstXcROSIb6YxhZe4T8CjfkZ3zbIY1aPZ+zShHS5J7YBg1ifsJ7jaFxYu/WTap4="}';
declare global {
  interface Window {
    React: any;
    ReactDom: any;
  }
}

window.React = window.React || React;
window.ReactDom = window.ReactDom || ReactDom;
@Component({
  styleUrls: ['./photoeditor.component.css'],
  selector: "app-photo-editor-react",
  templateUrl: './photoeditor.component.html',
})
export class PhotoEditorComponent extends React.Component implements AfterViewInit {

  @Input() src: string;
  @ViewChild("psdkContainer", { static: false }) container: { nativeElement: any; };
  editor: any;
  image = new Image();

  constructor(private el: ElementRef) {
    super({
      license: license,
      container: '<div #psdkContainer style="width: 100vw; height: 100vh;"></div>',
      image: 'https://static.photoeditorsdk.com/libraries/unsplash/raw/PZAxzN5DPkc.jpg',
      assetBaseUrl: "../../../assets/photoeditorsdk",
    });
  }

  public ngAfterViewInit(): void {
    this.instantiateEditor();
  }
  async instantiateEditor() {
    this.image.src = this.src;
    try {
      this.editor = await PhotoEditorSDKUI.init({
        license,
        container: this.el.nativeElement,
        image: this.src,
        assetBaseUrl: "../../../assets/photoeditorsdk",
        layout: 'basic',
        forceCrop: true,
        theme: 'light',
        mainCanvasActions: [CanvasAction.UNDO, CanvasAction.REDO],
        tools: [Tool.FILTER, Tool.TEXT, Tool.BRUSH, Tool.ADJUSTMENT, Tool.FOCUS, Tool.OVERLAY, Tool.LIBRARY],
      });
    } catch (error) {
      console.log(error);
    }
  }
}