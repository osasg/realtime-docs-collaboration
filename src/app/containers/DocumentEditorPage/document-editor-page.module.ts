import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentEditorPageComponent } from './document-editor-page.component';
import { DocumentEditorPageRoutingModule } from './document-editor-page-routing.module';
import { MaterialRootModule } from '../../material.module';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    DocumentEditorPageComponent
  ],
  imports: [
    CommonModule,
    DocumentEditorPageRoutingModule,
    MaterialRootModule,
    SharedModule
  ]
})
export class DocumentEditorPageModule { }
