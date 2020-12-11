import {  TestBed, waitForAsync } from "@angular/core/testing"
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { UserService } from './user.service';


describe('AppComponent',()=>{

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      declarations:[AppComponent]
    }).compileComponents();
  }))



  it('test app title',()=>{
      const fixture = TestBed.createComponent(AppComponent);
      // console.log(fixture.componentInstance);
      const title = fixture.debugElement.query(By.css('h1')).nativeElement;
      fixture.detectChanges();
      expect(title.textContent).toEqual('testNG')
  })
  it('userService"s user should be equal to appComponent user',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(instance.user).toEqual(service.user)
  })
  it('spy on asynchrone calls ',waitForAsync (()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const instance = fixture.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    spyOn(userService,'getData').and.returnValue(Promise.resolve('newData'));
    fixture.whenStable().then(()=>{
      expect(instance.data).toEqual('newData');
    });

  }))
})