import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialRoutingModule } from './testimonial-routing.module';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { FeedbackBlockComponent } from './feedback-block/feedback-block.component';


@NgModule({
  declarations: [TestimonialPageComponent, FeedbackBlockComponent],
  imports: [
    CommonModule,
    TestimonialRoutingModule
  ]
})
export class TestimonialModule { }
