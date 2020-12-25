import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { DocumentEditorPageComponent } from './document-editor-page.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentEditorPageComponent,
    canActivate: [AngularFireAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentEditorPageRoutingModule {}
