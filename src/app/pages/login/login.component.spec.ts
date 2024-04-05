import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import {AppComponent} from "../../app.component";

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        CommonModule,
      ],
      providers: [
        RouterModule
      ],
      declarations: [
        LoginComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    const fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    const fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component.formGroup.get('username')?.value).toEqual('');
    expect(component.formGroup.get('password')?.value).toEqual('');
  });

  it('should call login method when button is clicked', () => {
    const fixture: ComponentFixture<LoginComponent> = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'login');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.login).toHaveBeenCalled();
  });

});
