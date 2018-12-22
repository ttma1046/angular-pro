import { Component, ViewContainerRef, ComponentRef, ViewChild, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

import { AuthFormComponent } from './auth-form//auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <button (click)="destoryComponent()">
      Destory
    </button>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  component: ComponentRef<AuthFormComponent>;
  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    console.log(this.component.instance);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  destoryComponent() {
    this.component.destroy();
  }
}
