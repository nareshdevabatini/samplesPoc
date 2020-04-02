import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToastSketchPadComponent } from './toast-sketchpad/toast-sketchpad..component';
import { PainterroComponent } from './painterro/painterro.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ToastUiImageEditorModule } from 'ngx-tui-image-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from '../material-module';
import { SketchComponent } from './sketch.component';

const routes: Routes = [
  { path: '', component: SketchComponent },
  { path: 'toast', component: ToastSketchPadComponent },
  { path: 'painterro', component: PainterroComponent },
  { path: '**', component: SketchComponent },
];

@NgModule({
  imports: [
    ToastUiImageEditorModule,
    MaterialModules,
    RouterModule.forChild(routes)
  ],
  declarations: [SketchComponent, ToastSketchPadComponent, PainterroComponent],
  exports: [RouterModule],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class SketchModule { }