import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBuyComponent } from './article-buy.component';

describe('ArticleBuyComponent', () => {
  let component: ArticleBuyComponent;
  let fixture: ComponentFixture<ArticleBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
