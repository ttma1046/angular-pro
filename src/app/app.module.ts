import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './one/one.component';
import { ExampleTwoComponent } from './two/two.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { MyForDirective } from './my-for/my-for.directive';
import { FileSizePipe } from './filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    CreditCardComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
    FileSizePipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
