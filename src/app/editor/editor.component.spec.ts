import { TestBed, async } from '@angular/core/testing';
import { EditorComponent } from './editor.component';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
 // TODO: this helper should be in @angular/platform-browser-dynamic/testing
try {
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
} catch {
  // Ignore exceptions when calling it multiple times.
}

describe('EditorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditorComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(EditorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular-sketch'`, async(() => {
    const fixture = TestBed.createComponent(EditorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-sketch');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-sketch!');
  }));
});
