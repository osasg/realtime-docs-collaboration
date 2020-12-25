import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEditorPageComponent } from './document-editor-page.component';

describe('DocumentEditorPageComponent', () => {
  let component: DocumentEditorPageComponent;
  let fixture: ComponentFixture<DocumentEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
