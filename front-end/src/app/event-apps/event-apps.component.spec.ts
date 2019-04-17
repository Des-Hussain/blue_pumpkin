import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAppsComponent } from './event-apps.component';

describe('EventAppsComponent', () => {
  let component: EventAppsComponent;
  let fixture: ComponentFixture<EventAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
