import {
  Renderer2,
  Component,
  Output,
  ViewChildren,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  styles: [`
    .email { border-color: #9f72e6; }
  `],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{ title }}</h3>
        <label>
          Email address 
          <input type="email" name="email" ngModel #email/>
        </label>
        <label>
          Password 
          <input type="password" name="password" ngModel/>
        </label>
        <button type="submit">
          {{ title }}
        </button>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage: boolean;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  
  @ViewChild('email') email: ElementRef;

  @ContentChildren(AuthRememberComponent) remember: QueryList<
    AuthRememberComponent
  >;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();

    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.addClass(this.email.nativeElement, 'email');
    // this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
    if (this.message) {
      this.message.forEach(item => {
        item.days = 30;
      });

      this.cd.detectChanges();
    }
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach(item => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked)
        );
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
