import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-editor-page',
  templateUrl: './document-editor-page.component.html',
  styleUrls: ['./document-editor-page.component.scss']
})
export class DocumentEditorPageComponent implements OnInit {

  editor = {
    slideSorter: false,
    currentSlideIndex: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleSlideSorter(): void {
    this.editor.slideSorter = !this.editor.slideSorter;
  }

}
