import { Component, TemplateRef, ViewContainerRef, ComponentRef, ViewChild, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

import { AuthFormComponent } from './auth-form//auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
    selector: 'app-root',
    template: `
    <div>
      <div #entry></div>
      <ng-template #tmpl>
        Chandle Fang : Sydney, AU
      </ng-template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
    @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
    @ViewChild('tmpl') tmpl: TemplateRef<any>;
    constructor(
        private resolver: ComponentFactoryResolver
    ) { }

    ngAfterContentInit() {
      this.entry.createEmbeddedView(this.tmpl);
    }
}
