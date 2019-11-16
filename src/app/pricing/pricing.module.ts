import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { PricingBlockComponent } from './pricing-block/pricing-block.component';


@NgModule({
  declarations: [PricingPageComponent, PricingBlockComponent],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
