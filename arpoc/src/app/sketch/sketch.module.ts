import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToastSketchPadComponent } from './toast-sketchpad/toast-sketchpad..component';
import { PainterroComponent } from './painterro/painterro.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastUiImageEditorModule } from 'ngx-tui-image-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from '../material-module';
import { SketchComponent } from './sketch.component';
import { RaphaelComponent } from './raphael/raphael.component';
import { PhotoEditorComponent } from './photoeditor/photoeditor.component';

const routes: Routes = [
  { path: '', component: SketchComponent },
  { path: 'toast', component: ToastSketchPadComponent },
  { path: 'painterro', component: PainterroComponent },
  { path: 'photoeditor', component: PhotoEditorComponent },
  { path: 'raphael', component: RaphaelComponent },
  { path: '**', component: SketchComponent },
];

@NgModule({
  imports: [
    ToastUiImageEditorModule,
    MaterialModules,
    RouterModule.forChild(routes)
  ],
  declarations: [SketchComponent, ToastSketchPadComponent,
    PainterroComponent, RaphaelComponent, PhotoEditorComponent],
  exports: [RouterModule],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class SketchModule { }