import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilFollowerComponent } from './profil-follower.component';

describe('ProfilFollowerComponent', () => {
  let component: ProfilFollowerComponent;
  let fixture: ComponentFixture<ProfilFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
