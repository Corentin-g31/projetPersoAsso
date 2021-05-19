import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWeBlockComponent } from './who-are-we-block.component';

describe('WhoAreWeBlockComponent', () => {
  let component: WhoAreWeBlockComponent;
  let fixture: ComponentFixture<WhoAreWeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoAreWeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreWeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
