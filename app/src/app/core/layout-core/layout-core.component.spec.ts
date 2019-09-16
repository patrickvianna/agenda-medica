
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutCoreComponent } from './layout-core.component';

describe('LayoutCoreComponent', () => {
  let component: LayoutCoreComponent;
  let fixture: ComponentFixture<LayoutCoreComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [LayoutCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
