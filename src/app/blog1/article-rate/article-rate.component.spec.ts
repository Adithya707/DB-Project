import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRateComponent } from './article-rate.component';

describe('ArticleRateComponent', () => {
  let component: ArticleRateComponent;
  let fixture: ComponentFixture<ArticleRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
