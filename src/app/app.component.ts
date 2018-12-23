import {
  Component,
  TemplateRef, ViewContainerRef, ComponentRef, ViewChild, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

import { AuthFormComponent } from './auth-form//auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
    selector: 'app-root',
    template: `
    <div>
      <ng-container [ngTemplateOutlet]="tmpl">
      </ng-container>
      <ng-template #tmpl>
        Chandler Fang : Sydney AU
      </ng-template>
    </div>
  `
})
export class AppComponent {
}
