import {
  Component,
  TemplateRef, ViewContainerRef, ComponentRef, ViewChild, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

import { AuthFormComponent } from './auth-form//auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
    selector: 'app-root',
    template: `
    <div>
      <div #entry></div>
      <ng-template let-name>
       <li>{{ name }}</li>
      </ng-template>
      <!--
      *ngFor
      <template ngFor [ngForOf]="item">
      </template>
      -->
      <ng-template #tmpl let-foo let-location="location">
        {{ foo }} : {{ location }}
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
      this.entry.createEmbeddedView(
        this.tmpl, {
          $implicit: 'Chandler Fang',
          location: 'Sydney, AU'
        }
      );
    }

    // implicit variable will be bind to any variable;
}
